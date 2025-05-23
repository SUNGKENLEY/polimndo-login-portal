
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Menu, LogOut, Home, Users, BookOpen, ListTodo, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const FacultyDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const userData = {
    name: "Dr. BUDI SANTOSO, M.Pd.",
    nip: "19750610200501",
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
              <p className="text-sm">{userData.nip}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          <ul>
            <li>
              <Link to="/faculty-dashboard" className="flex items-center px-4 py-3 bg-blue-700">
                <Home className="h-5 w-5 mr-3" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/faculty-dashboard" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <Users className="h-5 w-5 mr-3" />
                <span>Profil</span>
              </Link>
            </li>
            <li>
              <Link to="/faculty-dashboard" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <BookOpen className="h-5 w-5 mr-3" />
                <span>Pengajaran</span>
              </Link>
            </li>
            <li>
              <Link to="/faculty-dashboard" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <ListTodo className="h-5 w-5 mr-3" />
                <span>Perwalian</span>
              </Link>
            </li>
            <li>
              <Link to="/faculty-dashboard" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <FileText className="h-5 w-5 mr-3" />
                <span>Penelitian</span>
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
          <h1 className="text-2xl font-semibold mb-6">Selamat Datang, <span className="text-blue-800">{userData.name}</span></h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Welcome Card */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">Selamat datang di Portal Dosen.</h3>
                <p className="text-gray-600 mb-4">
                  Portal Dosen merupakan fasilitas yang disediakan bagi tenaga pengajar
                  untuk mengelola kegiatan akademik dan pengajaran.
                </p>
                <p>
                  Jika menemui permasalahan, silahkan klik <a href="#" className="text-blue-500 hover:underline">tautan ini</a>.
                </p>
              </CardContent>
            </Card>

            {/* Academic Info Card */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Jadwal Mengajar</h3>
                  <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
                    <span>Lihat Semua</span>
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Senin, 23 Mei 2025</h4>
                    <div className="mt-2 space-y-2">
                      <p>
                        <span className="font-medium">08:00 - 09:40</span> - Pemrograman Web (TI-2A)
                      </p>
                      <p>
                        <span className="font-medium">10:00 - 11:40</span> - Basis Data (TI-3B)
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium">Selasa, 24 Mei 2025</h4>
                    <div className="mt-2 space-y-2">
                      <p>
                        <span className="font-medium">13:00 - 14:40</span> - Algoritma dan Pemrograman (TI-1C)
                      </p>
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

export default FacultyDashboard;
