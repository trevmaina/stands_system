import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function AdminAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Check if user has admin access
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('user_id', user.id)
          .single();

        const adminRoles = ['super_admin', 'lead_pastor', 'church_admin', 'ministry_head', 'media_team', 'events_coordinator'];
        if (profile && adminRoles.includes(profile.role)) {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    };
    
    checkUser();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin`
          }
        });

        if (error) throw error;

        toast({
          title: "Success",
          description: "Account created! Please check your email for verification.",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        // Check admin access after login
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('user_id', user.id)
            .single();

          const adminRoles = ['super_admin', 'lead_pastor', 'church_admin', 'ministry_head', 'media_team', 'events_coordinator'];
          if (profile && adminRoles.includes(profile.role)) {
            navigate('/admin');
          } else {
            await supabase.auth.signOut();
            toast({
              title: "Access Denied",
              description: "You don't have permission to access the admin panel.",
              variant: "destructive",
            });
          }
        }
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <CardDescription>
              {isSignUp ? "Create an admin account" : "Sign in to access the admin panel"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  minLength={6}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Please wait..." : (isSignUp ? "Create Account" : "Sign In")}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <Button
                variant="link"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm"
              >
                {isSignUp 
                  ? "Already have an account? Sign in" 
                  : "Need an account? Sign up"
                }
              </Button>
            </div>

            <div className="mt-4 text-center">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="w-full"
              >
                Back to Website
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}