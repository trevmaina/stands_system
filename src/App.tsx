import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Sermons from "./pages/Sermons";
import Testimonies from "./pages/Testimonies";
import Give from "./pages/Give";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MainCongregation from "./pages/congregations/Main";
import YouthCongregation from "./pages/congregations/Youth";
import FrenchCongregation from "./pages/congregations/French";
import YouthIndex from "./pages/congregations/youth/Index";
import YouthSermons from "./pages/congregations/youth/Sermons";
import YouthMinistries from "./pages/congregations/youth/Ministries";
import YouthEvents from "./pages/congregations/youth/Events";
import YouthNewsletter from "./pages/congregations/youth/Newsletter";
import YouthContact from "./pages/congregations/youth/Contact";
import YouthNavigation from "./components/layout/YouthNavigation";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminAuth from "./pages/admin/Auth";
import ContentManagement from "./pages/admin/ContentManagement";
import UserManagement from "./pages/admin/UserManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Youth Congregation Routes - with dedicated navigation */}
            <Route path="/congregations/youth/*" element={
              <div className="min-h-screen flex flex-col">
                <YouthNavigation />
                <main className="flex-1">
                  <Routes>
                    <Route index element={<YouthIndex />} />
                    <Route path="sermons" element={<YouthSermons />} />
                    <Route path="ministries" element={<YouthMinistries />} />
                    <Route path="events" element={<YouthEvents />} />
                    <Route path="newsletter" element={<YouthNewsletter />} />
                    <Route path="contact" element={<YouthContact />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            } />
            
            {/* Main Site Routes */}
            <Route path="*" element={
              <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/sermons" element={<Sermons />} />
                    <Route path="/testimonies" element={<Testimonies />} />
                    <Route path="/give" element={<Give />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/congregations/main" element={<MainCongregation />} />
                    <Route path="/congregations/french" element={<FrenchCongregation />} />
                    {/* Admin Routes */}
                    <Route path="/auth" element={<AdminAuth />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/auth" element={<AdminAuth />} />
                    <Route path="/admin/content" element={<ContentManagement />} />
                    <Route path="/admin/users" element={<UserManagement />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
