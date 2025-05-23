
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Menu, LogOut, Home, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const UserManagement = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const userData = {
    name: "ADMIN SISTEM",
    id: "ADMIN-001",
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
      <div className={`bg-purple-900 text-white w-full md:w-64 flex-shrink-0 ${isMenuOpen ? "block" : "hidden md:block"}`}>
        {/* Logo and header */}
        <div className="p-4 flex items-center border-b border-purple-800">
          <div className="mr-2">
            <img src="/lovable-uploads/cd97c5a0-3fbd-48dd-8c2a-26e97e82d272.png" alt="" className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-medium">Portal Admin</h1>
        </div>

        {/* User profile in sidebar */}
        <div className="p-4 border-b border-purple-800">
          <div className="flex items-center mb-2">
            <Avatar className="border-2 border-white h-16 w-16">
              <AvatarFallback className="bg-purple-700">
                <User className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <h2 className="font-bold">{userData.name}</h2>
              <p className="text-sm">{userData.id}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          <ul>
            <li>
              <Link to="/admin-dashboard" className="flex items-center px-4 py-3 hover:bg-purple-800">
                <Home className="h-5 w-5 mr-3" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/user-management" className="flex items-center px-4 py-3 bg-purple-800">
                <Users className="h-5 w-5 mr-3" />
                <span>Manajemen Pengguna</span>
              </Link>
            </li>
            <li>
              <Link to="/academic-db" className="flex items-center px-4 py-3 hover:bg-purple-800">
                <Users className="h-5 w-5 mr-3" />
                <span>Database Akademik</span>
              </Link>
            </li>
            <li>
              <Link to="/reports" className="flex items-center px-4 py-3 hover:bg-purple-800">
                <Users className="h-5 w-5 mr-3" />
                <span>Laporan</span>
              </Link>
            </li>
            <li>
              <Link to="/system-settings" className="flex items-center px-4 py-3 hover:bg-purple-800">
                <Users className="h-5 w-5 mr-3" />
                <span>Pengaturan Sistem</span>
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
          <h1 className="text-2xl font-semibold mb-6">Manajemen Pengguna</h1>
          
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Daftar Pengguna Sistem</h3>
              <p>Halaman ini berisi fitur untuk mengelola pengguna sistem, termasuk mahasiswa, dosen, dan staf.</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default UserManagement;
