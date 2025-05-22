
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Menu, LogOut, Home, Users, BookOpen, ListTodo, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const Perwalian = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userData = {
    name: "SUNG KENLEY SEAN TUUK",
    nim: "22024118",
    profileImage: null,
    wali: "Dr. Budi Santoso, M.Kom.",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const jadwalPerwalian = [
    { 
      tanggal: "15 Mei 2025", 
      waktu: "10:00 - 12:00", 
      ruangan: "Ruang Dosen 301",
      status: "upcoming",
      agenda: "Konsultasi KRS Semester Genap 2024/2025" 
    },
    { 
      tanggal: "20 Januari 2025", 
      waktu: "13:00 - 14:30", 
      ruangan: "Ruang Dosen 301",
      status: "completed",
      agenda: "Konsultasi KRS Semester Ganjil 2024/2025" 
    },
    { 
      tanggal: "15 Agustus 2024", 
      waktu: "09:00 - 10:30", 
      ruangan: "Ruang Dosen 301",
      status: "completed",
      agenda: "Evaluasi Hasil Studi Semester Genap 2023/2024" 
    },
    { 
      tanggal: "10 Januari 2024", 
      waktu: "13:00 - 14:30", 
      ruangan: "Ruang Dosen 301",
      status: "completed",
      agenda: "Konsultasi KRS Semester Ganjil 2023/2024" 
    }
  ];

  const logbookPerwalian = [
    {
      id: 1,
      tanggal: "20 Januari 2025",
      masalah: "Konsultasi pengambilan mata kuliah pilihan",
      solusi: "Disarankan mengambil mata kuliah Machine Learning dan Data Mining sesuai minat karir",
      tindakLanjut: "Mengubah KRS sesuai rekomendasi dosen wali"
    },
    {
      id: 2,
      tanggal: "15 Agustus 2024",
      masalah: "Evaluasi nilai semester lalu dan perencanaan magang",
      solusi: "Meningkatkan nilai mata kuliah inti dan mendaftar program magang di perusahaan IT pada semester 5",
      tindakLanjut: "Membuat jadwal belajar lebih terstruktur dan mempersiapkan CV untuk magang"
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
              <Link to="/toefl" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <FileText className="h-5 w-5 mr-3" />
                <span>Pendaftaran TOEFL</span>
              </Link>
            </li>
            <li>
              <Link to="/perwalian" className="flex items-center px-4 py-3 bg-blue-700">
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
          <h1 className="text-2xl font-semibold mb-6">Kegiatan Perwalian</h1>
          
          <Card className="shadow-sm mb-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-2">Informasi Dosen Wali</h3>
              <div className="flex items-center mt-4">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarFallback className="bg-blue-600">
                    <User className="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-lg">{userData.wali}</p>
                  <p className="text-gray-500">Program Studi Teknik Informatika</p>
                  <p className="text-gray-500">Email: budi.santoso@example.ac.id</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm mb-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Jadwal Perwalian</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Waktu</TableHead>
                    <TableHead>Ruangan</TableHead>
                    <TableHead>Agenda</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jadwalPerwalian.map((jadwal, index) => (
                    <TableRow key={index}>
                      <TableCell>{jadwal.tanggal}</TableCell>
                      <TableCell>{jadwal.waktu}</TableCell>
                      <TableCell>{jadwal.ruangan}</TableCell>
                      <TableCell>{jadwal.agenda}</TableCell>
                      <TableCell>
                        {jadwal.status === "upcoming" ? (
                          <Badge className="bg-blue-500">Akan Datang</Badge>
                        ) : (
                          <Badge className="bg-green-500">Selesai</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Logbook Perwalian</h3>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Tambah Catatan
                </Button>
              </div>
              
              {logbookPerwalian.map((log) => (
                <div key={log.id} className="mb-4 p-4 border rounded-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">Perwalian {log.tanggal}</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Masalah/Topik:</span> {log.masalah}
                    </div>
                    <div>
                      <span className="font-medium">Solusi/Saran:</span> {log.solusi}
                    </div>
                    <div>
                      <span className="font-medium">Tindak Lanjut:</span> {log.tindakLanjut}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Perwalian;
