-- Update user_role enum to include additional roles for the admin panel
ALTER TYPE user_role ADD VALUE IF NOT EXISTS 'finance_officer';
ALTER TYPE user_role ADD VALUE IF NOT EXISTS 'content_contributor';
ALTER TYPE user_role ADD VALUE IF NOT EXISTS 'volunteer_coordinator';