-- Create user roles enum
CREATE TYPE user_role AS ENUM (
  'super_admin',
  'lead_pastor', 
  'church_admin',
  'ministry_head',
  'media_team',
  'finance_officer',
  'events_coordinator',
  'content_contributor',
  'volunteer_coordinator',
  'member'
);

-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  role user_role DEFAULT 'member',
  congregation TEXT DEFAULT 'main', -- main, youth, french
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create content categories table
CREATE TABLE public.content_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  congregation TEXT DEFAULT 'main',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create content table
CREATE TABLE public.content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,
  featured_image TEXT,
  category_id UUID REFERENCES public.content_categories(id),
  author_id UUID NOT NULL REFERENCES public.profiles(user_id),
  status TEXT DEFAULT 'draft', -- draft, published, archived
  congregation TEXT DEFAULT 'main',
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create sermons table
CREATE TABLE public.sermons (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  speaker TEXT NOT NULL,
  description TEXT,
  scripture_reference TEXT,
  audio_url TEXT,
  video_url TEXT,
  youtube_url TEXT,
  sermon_date DATE NOT NULL,
  congregation TEXT DEFAULT 'main',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create events table  
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE,
  location TEXT,
  max_attendees INTEGER,
  registration_required BOOLEAN DEFAULT false,
  featured_image TEXT,
  congregation TEXT DEFAULT 'main',
  created_by UUID NOT NULL REFERENCES public.profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create testimonies table
CREATE TABLE public.testimonies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT,
  content TEXT NOT NULL,
  image_url TEXT,
  approved BOOLEAN DEFAULT false,
  congregation TEXT DEFAULT 'main',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sermons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonies ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage all profiles" ON public.profiles FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles p 
    WHERE p.user_id = auth.uid() 
    AND p.role IN ('super_admin', 'church_admin', 'lead_pastor')
  )
);

-- Content policies  
CREATE POLICY "Anyone can view published content" ON public.content FOR SELECT USING (status = 'published');
CREATE POLICY "Authors can manage own content" ON public.content FOR ALL USING (auth.uid() = author_id);
CREATE POLICY "Admins can manage all content" ON public.content FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles p 
    WHERE p.user_id = auth.uid() 
    AND p.role IN ('super_admin', 'church_admin', 'lead_pastor', 'media_team')
  )
);

-- Categories policies
CREATE POLICY "Anyone can view categories" ON public.content_categories FOR SELECT USING (true);
CREATE POLICY "Admins can manage categories" ON public.content_categories FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles p 
    WHERE p.user_id = auth.uid() 
    AND p.role IN ('super_admin', 'church_admin', 'lead_pastor')
  )
);

-- Sermons policies
CREATE POLICY "Anyone can view sermons" ON public.sermons FOR SELECT USING (true);
CREATE POLICY "Admins and pastors can manage sermons" ON public.sermons FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles p 
    WHERE p.user_id = auth.uid() 
    AND p.role IN ('super_admin', 'church_admin', 'lead_pastor', 'ministry_head', 'media_team')
  )
);

-- Events policies
CREATE POLICY "Anyone can view events" ON public.events FOR SELECT USING (true);
CREATE POLICY "Event coordinators can manage events" ON public.events FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles p 
    WHERE p.user_id = auth.uid() 
    AND p.role IN ('super_admin', 'church_admin', 'lead_pastor', 'events_coordinator', 'ministry_head')
  )
);

-- Testimonies policies
CREATE POLICY "Anyone can view approved testimonies" ON public.testimonies FOR SELECT USING (approved = true);
CREATE POLICY "Users can create testimonies" ON public.testimonies FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can manage all testimonies" ON public.testimonies FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles p 
    WHERE p.user_id = auth.uid() 
    AND p.role IN ('super_admin', 'church_admin', 'lead_pastor')
  )
);

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, first_name, last_name, email)
  VALUES (
    new.id,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name',
    new.email
  );
  RETURN new;
END;
$$;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for timestamp updates
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_content_updated_at BEFORE UPDATE ON public.content FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_sermons_updated_at BEFORE UPDATE ON public.sermons FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON public.events FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_testimonies_updated_at BEFORE UPDATE ON public.testimonies FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default content categories
INSERT INTO public.content_categories (name, slug, description, congregation) VALUES
('Announcements', 'announcements', 'Church announcements and news', 'main'),
('Articles', 'articles', 'General articles and blog posts', 'main'),
('Ministry Updates', 'ministry-updates', 'Updates from various ministries', 'main'),
('Youth News', 'youth-news', 'Youth congregation news and updates', 'youth'),
('French Updates', 'french-updates', 'French congregation updates', 'french');