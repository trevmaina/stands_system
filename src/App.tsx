import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/contexts/AuthContext";
import { Navigation } from "@/components/layout/Navigation";
import { MainNavigation } from "@/components/layout/MainNavigation";
import { Footer } from "@/components/layout/Footer";
import { AdminLayout } from "@/components/admin/AdminLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Testimonies from "./pages/Testimonies";
import Give from "./pages/Give";
import Contact from "./pages/Contact";
import Serve from "./pages/Serve";
import Shop from "./pages/Shop";
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
import EventsManagement from "./pages/admin/EventsManagement";
import MediaLibrary from "./pages/admin/MediaLibrary";
import VolunteersManagement from "./pages/admin/VolunteersManagement";
import FinanceManagement from "./pages/admin/FinanceManagement";
import AdminSettings from "./pages/admin/AdminSettings";

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
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Admin Routes - with dedicated layout */}
              <Route path="/admin/*" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<UserManagement />} />
                <Route path="content" element={<ContentManagement />} />
                <Route path="events" element={<EventsManagement />} />
                <Route path="media" element={<MediaLibrary />} />
                <Route path="volunteers" element={<VolunteersManagement />} />
                <Route path="finance" element={<FinanceManagement />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>

              {/* Admin Auth Route */}
              <Route path="/auth" element={<AdminAuth />} />
              <Route path="/admin-direct" element={<AdminDashboard />} />

              {/* Main Congregation Routes - with dedicated navigation */}
              <Route path="/congregations/main/*" element={
                <div className="min-h-screen flex flex-col">
                  <MainNavigation />
                  <main className="flex-1">
                    <Routes>
                      <Route index element={<MainCongregation />} />
                      <Route path="services" element={<Services />} />
                      <Route path="about" element={<About />} />
                      <Route path="events" element={<Events />} />
                      <Route path="serve" element={<Serve />} />
                      <Route path="give" element={<Give />} />
                      <Route path="shop" element={<Shop />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              } />

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
                      <Route path="/testimonies" element={<Testimonies />} />
                      <Route path="/give" element={<Give />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/serve" element={<Serve />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/congregations/french" element={<FrenchCongregation />} />
                      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              } />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
