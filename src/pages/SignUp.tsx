
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !username || !email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Semua field wajib diisi",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Password dan konfirmasi password tidak cocok",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Registrasi berhasil",
      description: "Akun anda berhasil dibuat",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <div className="flex justify-center -mt-10">
          <Avatar className="h-20 w-20 bg-teal-500 text-white">
            <AvatarFallback>
              <UserPlus className="h-10 w-10" />
            </AvatarFallback>
          </Avatar>
        </div>
        
        <CardHeader className="text-center pt-2">
          <h2 className="text-xl font-medium">Register Portal Polindo</h2>
        </CardHeader>
        
        <form onSubmit={handleSignUp}>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="fullName"
                  placeholder="Nama Lengkap"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              
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
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              
              <div className="space-y-2">
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Konfirmasi Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full bg-teal-500 hover:bg-teal-600"
            >
              Sign Up
            </Button>
            
            <p className="text-xs text-center text-gray-600">
              Sudah punya akun? <Link to="/" className="text-teal-500 hover:text-teal-600">Login di sini</Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
