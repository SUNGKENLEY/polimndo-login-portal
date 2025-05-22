
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Menu, LogOut, Home, Users, BookOpen, ListTodo, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userData = {
    name: "SUNG KENLEY SEAN TUUK",
    nim: "22024118",
    profileImage: null,
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <Link to="/dashboard" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <Users className="h-5 w-5 mr-3" />
                <span>Pengguna</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <BookOpen className="h-5 w-5 mr-3" />
                <span>Studi</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <ListTodo className="h-5 w-5 mr-3" />
                <span>Lainnya</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <FileText className="h-5 w-5 mr-3" />
                <span>Pendaftaran TOEFL</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center px-4 py-3 hover:bg-blue-700">
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
          <button className="text-red-600">
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
                <h3 className="text-lg font-medium mb-2">Selamat datang di Portal Akademik.</h3>
                <p className="text-gray-600 mb-4">
                  Portal Akademik merupakan fasilitas yang disediakan bagi civitas
                  akademika untuk menerima informasi dengan lebih cepat melalui
                  internet. Diharapkan civitas akademika mendapat manfaat dengan
                  aplikasi ini. Selamat menikmati...
                </p>
                <p>
                  Jika menemui permasalahan, silahkan klik <a href="#" className="text-blue-500 hover:underline">tautan ini</a>.
                </p>
              </CardContent>
            </Card>

            {/* Payment Info Card */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Tagihan UKT</h3>
                  <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
                    <span>-</span>
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Periode: 2022/2023 Ganjil</h4>
                    <div className="mt-2 space-y-2">
                      <p>
                        <span className="font-medium">Pilihan Pembayaran:</span> PELUNASAN (UKT SEMESTER 1)
                      </p>
                      <p>
                        <span className="font-medium">Nomor VA:</span> 886671022101535 <span className="text-red-500">(Expired)</span> <span className="text-green-500">LUNAS</span>
                      </p>
                      <p>
                        <span className="font-medium">Rp.</span> 4.900.000
                      </p>
                      <p>
                        <span className="font-medium">Jatuh tempo:</span> 2022-07-30 23:59:59
                      </p>
                      <div className="mt-4">
                        <p className="font-medium">Detail Pembayaran:</p>
                        <p>Jumlah = Rp. 4.900.000</p>
                        <p>Terbayar = Rp. 4.900.000</p>
                        <p>Sisa = Rp. 0 <span className="text-green-500">(LUNAS)</span></p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium">Periode: 2024/2025 Genap</h4>
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

export default Dashboard;
