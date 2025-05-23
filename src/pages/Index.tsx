
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, GraduationCap, UserCog } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState("student");
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
      description: `Anda berhasil login sebagai ${getUserTypeLabel(userType)}`,
    });
    
    // Redirect based on user type
    switch(userType) {
      case "faculty":
        navigate("/faculty-dashboard");
        break;
      case "admin":
        navigate("/admin-dashboard");
        break;
      default:
        navigate("/dashboard");
    }
  };

  const getUserTypeLabel = (type: string) => {
    switch(type) {
      case "faculty": return "Dosen";
      case "admin": return "Admin";
      default: return "Mahasiswa";
    }
  };

  const getAvatarIcon = () => {
    switch(userType) {
      case "faculty": return <GraduationCap className="h-10 w-10" />;
      case "admin": return <UserCog className="h-10 w-10" />;
      default: return <User className="h-10 w-10" />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <div className="flex justify-center -mt-10">
          <Avatar className={`h-20 w-20 text-white ${userType === "faculty" ? "bg-blue-500" : userType === "admin" ? "bg-purple-500" : "bg-teal-500"}`}>
            <AvatarFallback>
              {getAvatarIcon()}
            </AvatarFallback>
          </Avatar>
        </div>
        
        <CardHeader className="text-center pt-2">
          <h2 className="text-xl font-medium">Portal Polindo</h2>
          <Tabs 
            defaultValue="student" 
            value={userType}
            onValueChange={setUserType}
            className="w-full mt-2"
          >
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="student">Mahasiswa</TabsTrigger>
              <TabsTrigger value="faculty">Dosen</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        
        <form onSubmit={handleLogin}>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="username"
                  placeholder={userType === "student" ? "NIM / Username" : "Username"}
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
              className={`w-full ${
                userType === "faculty" ? "bg-blue-500 hover:bg-blue-600" : 
                userType === "admin" ? "bg-purple-500 hover:bg-purple-600" : 
                "bg-teal-500 hover:bg-teal-600"
              }`}
            >
              Sign In
            </Button>
            
            {userType === "student" && (
              <p className="text-xs text-center text-gray-600">
                Don't have an account? <Link to="/signup" className="text-teal-500 hover:text-teal-600">Sign up here</Link>
              </p>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Index;
