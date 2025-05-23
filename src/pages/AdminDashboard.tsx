
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Menu, LogOut, Home, Users, Settings, Database, FileText, Shield, BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
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
              {userData.profileImage ? (
                <AvatarImage src={userData.profileImage} alt={userData.name} />
              ) : (
                <AvatarFallback className="bg-purple-700">
                  <Shield className="h-8 w-8" />
                </AvatarFallback>
              )}
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
              <Link to="/admin-dashboard" className="flex items-center px-4 py-3 bg-purple-800">
                <Home className="h-5 w-5 mr-3" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/user-management" className="flex items-center px-4 py-3 hover:bg-purple-800">
                <Users className="h-5 w-5 mr-3" />
                <span>Manajemen Pengguna</span>
              </Link>
            </li>
            <li>
              <Link to="/academic-db" className="flex items-center px-4 py-3 hover:bg-purple-800">
                <Database className="h-5 w-5 mr-3" />
                <span>Database Akademik</span>
              </Link>
            </li>
            <li>
              <Link to="/reports" className="flex items-center px-4 py-3 hover:bg-purple-800">
                <FileText className="h-5 w-5 mr-3" />
                <span>Laporan</span>
              </Link>
            </li>
            <li>
              <Link to="/system-settings" className="flex items-center px-4 py-3 hover:bg-purple-800">
                <Settings className="h-5 w-5 mr-3" />
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
          <h1 className="text-2xl font-semibold mb-6">Selamat Datang, <span className="text-purple-800">{userData.name}</span></h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card className="bg-blue-50 border-l-4 border-blue-500">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-blue-500">Total Mahasiswa</p>
                    <p className="text-2xl font-bold">1,254</p>
                  </div>
                  <Users className="h-10 w-10 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-l-4 border-green-500">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-green-500">Total Dosen</p>
                    <p className="text-2xl font-bold">87</p>
                  </div>
                  <Users className="h-10 w-10 text-green-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50 border-l-4 border-amber-500">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-amber-500">Jumlah Kelas</p>
                    <p className="text-2xl font-bold">142</p>
                  </div>
                  <FileText className="h-10 w-10 text-amber-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-l-4 border-purple-500">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-purple-500">Mata Kuliah</p>
                    <p className="text-2xl font-bold">56</p>
                  </div>
                  <BookOpen className="h-10 w-10 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* System Status Card */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Status Sistem</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Server Database</p>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">API Gateway</p>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Storage Server</p>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Backup System</p>
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">Maintenance</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full">View System Logs</Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity Card */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Aktivitas Terbaru</h3>
                  <Button variant="outline" size="sm">Lihat Semua</Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b">
                    <div className="bg-blue-100 p-2 rounded">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Pendaftaran mahasiswa baru</p>
                      <p className="text-sm text-gray-500">20 menit yang lalu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 pb-3 border-b">
                    <div className="bg-green-100 p-2 rounded">
                      <Settings className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Update pengaturan sistem</p>
                      <p className="text-sm text-gray-500">2 jam yang lalu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-100 p-2 rounded">
                      <Database className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Backup database otomatis</p>
                      <p className="text-sm text-gray-500">6 jam yang lalu</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
