
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Menu, LogOut, Home, Users, BookOpen, ListTodo, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const StudentAccount = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const userData = {
    name: "SUNG KENLEY SEAN TUUK",
    nim: "22024118",
    profileImage: null,
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className={`bg-blue-800 text-white w-full md:w-64 flex-shrink-0 ${isMenuOpen ? "block" : "hidden md:block"}`}>
        {/* Logo and header */}
        <div className="p-4 flex items-center border-b border-blue-700">
          <div className="mr-2">
            <img src="/lovable-uploads/cd97c5a0-3fbd-48dd-8c2a-26e97e82d272.png" alt="" className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-medium">Portal Akademik</h1>
        </div>

        {/* User profile in sidebar */}
        <div className="p-4 border-b border-blue-700">
          <div className="flex items-center mb-2">
            <Avatar className="border-2 border-white h-16 w-16">
              {userData.profileImage ? (
                <AvatarImage src={userData.profileImage} alt={userData.name} />
              ) : (
                <AvatarFallback className="bg-blue-600">
                  <User className="h-8 w-8" />
                </AvatarFallback>
              )}
            </Avatar>
            <div className="ml-3">
              <h2 className="font-bold">{userData.name}</h2>
              <p className="text-sm">{userData.nim}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          <ul>
            <li>
              <Link to="/dashboard" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <Home className="h-5 w-5 mr-3" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/student-account" className="flex items-center px-4 py-3 bg-blue-700">
                <Users className="h-5 w-5 mr-3" />
                <span>Akun Saya</span>
              </Link>
            </li>
            <li>
              <Link to="/studi" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <BookOpen className="h-5 w-5 mr-3" />
                <span>Studi</span>
              </Link>
            </li>
            <li>
              <Link to="/other" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <ListTodo className="h-5 w-5 mr-3" />
                <span>Lainnya</span>
              </Link>
            </li>
            <li>
              <Link to="/toefl" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <FileText className="h-5 w-5 mr-3" />
                <span>Pendaftaran TOEFL</span>
              </Link>
            </li>
            <li>
              <Link to="/perwalian" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <ListTodo className="h-5 w-5 mr-3" />
                <span>Kegiatan Perwalian</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm flex justify-between items-center p-4">
          <button onClick={toggleMenu} className="md:hidden">
            <Menu />
          </button>
          <div></div>
          <button className="text-red-600" onClick={handleLogout}>
            <LogOut />
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6">Akun Saya</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Informasi Pengguna</h3>
                <div className="space-y-4">
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-gray-500">Nama Lengkap</span>
                    <span className="font-medium">{userData.name}</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-gray-500">NIM</span>
                    <span className="font-medium">{userData.nim}</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-gray-500">Program Studi</span>
                    <span className="font-medium">Teknik Informatika</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-gray-500">Fakultas</span>
                    <span className="font-medium">Teknik</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-gray-500">Angkatan</span>
                    <span className="font-medium">2022</span>
                  </div>
                </div>
                <Button className="mt-6 bg-blue-500 hover:bg-blue-600">
                  Ubah Profil
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Pengaturan Akun</h3>
                <div className="space-y-4">
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-gray-500">Email</span>
                    <span className="font-medium">student@example.com</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-gray-500">Nomor Telepon</span>
                    <span className="font-medium">+62 812-3456-7890</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-gray-500">Alamat</span>
                    <span className="font-medium">Jl. Contoh No. 123, Jakarta</span>
                  </div>
                </div>
                <div className="mt-6 space-x-2">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    Ubah Password
                  </Button>
                  <Button variant="outline">
                    Ubah Kontak
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentAccount;
