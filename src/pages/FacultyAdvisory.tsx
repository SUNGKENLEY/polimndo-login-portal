
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Menu, LogOut, Home, Users, BookOpen, ListTodo, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const FacultyAdvisory = () => {
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

  const advisoryStudents = [
    {
      id: 1,
      name: "SUNG KENLEY SEAN TUUK",
      nim: "22024118",
      semester: 4,
      program: "Teknik Informatika",
      status: "active"
    },
    {
      id: 2,
      name: "MAYA PUTRI",
      nim: "22024119",
      semester: 4,
      program: "Teknik Informatika",
      status: "active"
    },
    {
      id: 3,
      name: "BIMA SAKTI",
      nim: "22024120",
      semester: 4, 
      program: "Teknik Informatika",
      status: "active"
    }
  ];

  const upcomingMeetings = [
    {
      id: 1,
      student: "SUNG KENLEY SEAN TUUK",
      date: "23 Mei 2025",
      time: "10:00 - 11:00",
      purpose: "Konsultasi KRS"
    },
    {
      id: 2,
      student: "MAYA PUTRI",
      date: "24 Mei 2025", 
      time: "13:00 - 14:00",
      purpose: "Evaluasi Akademik"
    }
  ];

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
              <Link to="/faculty-teaching" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <BookOpen className="h-5 w-5 mr-3" />
                <span>Pengajaran</span>
              </Link>
            </li>
            <li>
              <Link to="/faculty-advisory" className="flex items-center px-4 py-3 bg-blue-700">
                <ListTodo className="h-5 w-5 mr-3" />
                <span>Perwalian</span>
              </Link>
            </li>
            <li>
              <Link to="/faculty-research" className="flex items-center px-4 py-3 hover:bg-blue-700">
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
          <h1 className="text-2xl font-semibold mb-6">Perwalian Akademik</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Students Card */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Mahasiswa Perwalian</h3>
                  <Badge className="bg-blue-500">{advisoryStudents.length} Mahasiswa</Badge>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nama</TableHead>
                      <TableHead>NIM</TableHead>
                      <TableHead>Semester</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {advisoryStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell>{student.nim}</TableCell>
                        <TableCell>{student.semester}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Aktif</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <div className="mt-4 flex justify-end">
                  <Button className="bg-blue-500 hover:bg-blue-600">Lihat Semua</Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Meetings */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Jadwal Konsultasi</h3>
                  <Button variant="outline">+ Tambah Jadwal</Button>
                </div>
                
                {upcomingMeetings.map((meeting) => (
                  <div key={meeting.id} className="mb-4 p-3 border rounded-md">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">{meeting.student}</h4>
                      <Badge className="bg-blue-500">{meeting.date}</Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Waktu: {meeting.time}</p>
                      <p>Keperluan: {meeting.purpose}</p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-2">
                  <Button variant="outline" className="w-full">Lihat Semua Jadwal</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Riwayat Perwalian</h3>
              
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">Perwalian 20 Januari 2025</h4>
                    <Badge>3 Mahasiswa</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Pembahasan KRS Semester Genap 2024/2025</p>
                  <Button variant="outline" size="sm">Lihat Detail</Button>
                </div>
                
                <div className="p-4 border rounded-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">Perwalian 15 Agustus 2024</h4>
                    <Badge>3 Mahasiswa</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Evaluasi Hasil Studi Semester Genap 2023/2024</p>
                  <Button variant="outline" size="sm">Lihat Detail</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default FacultyAdvisory;
