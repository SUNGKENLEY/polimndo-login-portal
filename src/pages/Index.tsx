import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Username dan password wajib diisi",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Login berhasil",
      description: "Anda berhasil login",
    });
    
    // Redirect to dashboard page
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <div className="flex justify-center -mt-10">
          <Avatar className="h-20 w-20 bg-teal-500 text-white">
            <AvatarFallback>
              <User className="h-10 w-10" />
            </AvatarFallback>
          </Avatar>
        </div>
        
        <CardHeader className="text-center pt-2">
          <h2 className="text-xl font-medium">Portal Polindo</h2>
        </CardHeader>
        
        <form onSubmit={handleLogin}>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(!!checked)}
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                
                <a
                  href="#"
                  className="text-sm text-teal-500 hover:text-teal-600"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full bg-teal-500 hover:bg-teal-600"
            >
              Sign In
            </Button>
            
            <p className="text-xs text-center text-gray-600">
              Don't have an account? <Link to="/signup" className="text-teal-500 hover:text-teal-600">Sign up here</Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Index;
