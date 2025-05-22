
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Menu, LogOut, Home, Users, BookOpen, ListTodo, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const TOEFL = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const userData = {
    name: "SUNG KENLEY SEAN TUUK",
    nim: "22024118",
    profileImage: null,
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRegister = () => {
    toast({
      title: "Pendaftaran berhasil",
      description: "Anda telah berhasil mendaftar untuk tes TOEFL pada tanggal 15 Juni 2025",
    });
  };

  const toeflSchedules = [
    { 
      id: 1, 
      date: "15 Juni 2025", 
      time: "09:00 - 12:00", 
      location: "Laboratorium Bahasa", 
      seats: "25/30",
      status: "open" 
    },
    { 
      id: 2, 
      date: "22 Juni 2025", 
      time: "13:00 - 16:00", 
      location: "Laboratorium Bahasa", 
      seats: "15/30",
      status: "open" 
    },
    { 
      id: 3, 
      date: "29 Juni 2025", 
      time: "09:00 - 12:00", 
      location: "Laboratorium Bahasa", 
      seats: "30/30",
      status: "full" 
    },
    { 
      id: 4, 
      date: "06 Juli 2025", 
      time: "13:00 - 16:00", 
      location: "Laboratorium Bahasa", 
      seats: "12/30",
      status: "open" 
    },
  ];

  const myHistory = [
    { 
      date: "10 Januari 2024", 
      score: 523, 
      certificate: "TOEFL-22024118-01.pdf" 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar - same as Dashboard */}
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
              <Link to="/pengguna" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <Users className="h-5 w-5 mr-3" />
                <span>Pengguna</span>
              </Link>
            </li>
            <li>
              <Link to="/studi" className="flex items-center px-4 py-3 hover:bg-blue-700">
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
              <Link to="/toefl" className="flex items-center px-4 py-3 bg-blue-700">
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
          <button className="text-red-600">
            <LogOut />
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6">Pendaftaran TOEFL</h1>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Jadwal Tes TOEFL</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Tanggal</th>
                        <th className="border px-4 py-2 text-left">Waktu</th>
                        <th className="border px-4 py-2 text-left">Lokasi</th>
                        <th className="border px-4 py-2 text-center">Kuota</th>
                        <th className="border px-4 py-2 text-center">Status</th>
                        <th className="border px-4 py-2 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {toeflSchedules.map((schedule) => (
                        <tr key={schedule.id}>
                          <td className="border px-4 py-2">{schedule.date}</td>
                          <td className="border px-4 py-2">{schedule.time}</td>
                          <td className="border px-4 py-2">{schedule.location}</td>
                          <td className="border px-4 py-2 text-center">{schedule.seats}</td>
                          <td className="border px-4 py-2 text-center">
                            {schedule.status === "open" ? (
                              <Badge className="bg-green-500">Tersedia</Badge>
                            ) : (
                              <Badge className="bg-red-500">Penuh</Badge>
                            )}
                          </td>
                          <td className="border px-4 py-2 text-center">
                            <Button 
                              onClick={handleRegister} 
                              disabled={schedule.status !== "open"} 
                              size="sm"
                              className="bg-blue-500 hover:bg-blue-600"
                            >
                              Daftar
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Riwayat Tes TOEFL Saya</h3>
                {myHistory.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-2 text-left">Tanggal Tes</th>
                          <th className="border px-4 py-2 text-center">Skor</th>
                          <th className="border px-4 py-2 text-center">Sertifikat</th>
                        </tr>
                      </thead>
                      <tbody>
                        {myHistory.map((item, index) => (
                          <tr key={index}>
                            <td className="border px-4 py-2">{item.date}</td>
                            <td className="border px-4 py-2 text-center">{item.score}</td>
                            <td className="border px-4 py-2 text-center">
                              <Button variant="link" className="text-blue-500">
                                <Calendar className="h-4 w-4 mr-1" />
                                Unduh
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-500">Belum ada riwayat tes TOEFL.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TOEFL;
