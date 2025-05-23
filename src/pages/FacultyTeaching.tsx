
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Menu, LogOut, Home, Users, BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const FacultyTeaching = () => {
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
              <Link to="/faculty-dashboard" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <Home className="h-5 w-5 mr-3" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/faculty-profile" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <Users className="h-5 w-5 mr-3" />
                <span>Profil</span>
              </Link>
            </li>
            <li>
              <Link to="/faculty-teaching" className="flex items-center px-4 py-3 bg-blue-700">
                <BookOpen className="h-5 w-5 mr-3" />
                <span>Pengajaran</span>
              </Link>
            </li>
            <li>
              <Link to="/faculty-advisory" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <Users className="h-5 w-5 mr-3" />
                <span>Perwalian</span>
              </Link>
            </li>
            <li>
              <Link to="/faculty-research" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <Users className="h-5 w-5 mr-3" />
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
          <h1 className="text-2xl font-semibold mb-6">Pengajaran</h1>
          
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Jadwal Mengajar</h3>
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

              <div className="mt-4">
                <h4 className="font-medium">Selasa, 24 Mei 2025</h4>
                <div className="mt-2 space-y-2">
                  <p>
                    <span className="font-medium">13:00 - 14:40</span> - Algoritma dan Pemrograman (TI-1C)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default FacultyTeaching;
