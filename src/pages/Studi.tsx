
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Menu, LogOut, Home, Users, BookOpen, ListTodo, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Studi = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userData = {
    name: "SUNG KENLEY SEAN TUUK",
    nim: "22024118",
    profileImage: null,
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const courseData = [
    { code: "IF2301", name: "Algoritma dan Pemrograman", sks: 3, grade: "A" },
    { code: "IF2302", name: "Struktur Data", sks: 3, grade: "A-" },
    { code: "IF2303", name: "Pemrograman Web", sks: 3, grade: "B+" },
    { code: "IF2304", name: "Basis Data", sks: 3, grade: "A" },
    { code: "IF2305", name: "Sistem Operasi", sks: 3, grade: "B" },
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
              <Link to="/studi" className="flex items-center px-4 py-3 bg-blue-700">
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
          <h1 className="text-2xl font-semibold mb-6">Studi</h1>
          
          <Tabs defaultValue="courses">
            <TabsList className="mb-6">
              <TabsTrigger value="courses">Mata Kuliah</TabsTrigger>
              <TabsTrigger value="transcript">Transkrip</TabsTrigger>
              <TabsTrigger value="schedule">Jadwal Kuliah</TabsTrigger>
            </TabsList>
            
            <TabsContent value="courses">
              <Card>
                <CardHeader className="pb-0">
                  <h3 className="text-lg font-medium">Daftar Mata Kuliah Semester Ini</h3>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-2 text-left">Kode</th>
                          <th className="border px-4 py-2 text-left">Mata Kuliah</th>
                          <th className="border px-4 py-2 text-center">SKS</th>
                          <th className="border px-4 py-2 text-center">Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courseData.map((course) => (
                          <tr key={course.code}>
                            <td className="border px-4 py-2">{course.code}</td>
                            <td className="border px-4 py-2">{course.name}</td>
                            <td className="border px-4 py-2 text-center">{course.sks}</td>
                            <td className="border px-4 py-2 text-center">{course.grade}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="font-medium">
                          <td className="border px-4 py-2 text-right" colSpan={2}>Total SKS:</td>
                          <td className="border px-4 py-2 text-center">15</td>
                          <td className="border px-4 py-2"></td>
                        </tr>
                        <tr className="font-medium">
                          <td className="border px-4 py-2 text-right" colSpan={2}>IP Semester:</td>
                          <td className="border px-4 py-2 text-center" colSpan={2}>3.74</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="mt-6">
                    <Button className="bg-blue-500 hover:bg-blue-600 mr-2">
                      Cetak KHS
                    </Button>
                    <Button variant="outline">
                      Lihat Histori
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="transcript">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Transkrip Nilai</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total SKS:</span>
                      <span className="font-medium">84 dari 144</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IPK:</span>
                      <span className="font-medium">3.82</span>
                    </div>
                  </div>
                  <Button className="mt-6 bg-blue-500 hover:bg-blue-600">
                    Unduh Transkrip
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="schedule">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Jadwal Kuliah Semester Ini</h3>
                  <p className="text-gray-500 mb-6">Semester Genap 2024/2025</p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-2">Hari</th>
                          <th className="border px-4 py-2">Jam</th>
                          <th className="border px-4 py-2">Mata Kuliah</th>
                          <th className="border px-4 py-2">Dosen</th>
                          <th className="border px-4 py-2">Ruangan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2">Senin</td>
                          <td className="border px-4 py-2">08:00 - 10:30</td>
                          <td className="border px-4 py-2">Algoritma dan Pemrograman</td>
                          <td className="border px-4 py-2">Dr. Ahmad</td>
                          <td className="border px-4 py-2">Lab. 301</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Selasa</td>
                          <td className="border px-4 py-2">13:00 - 15:30</td>
                          <td className="border px-4 py-2">Struktur Data</td>
                          <td className="border px-4 py-2">Dr. Budi</td>
                          <td className="border px-4 py-2">Lab. 302</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Rabu</td>
                          <td className="border px-4 py-2">10:00 - 12:30</td>
                          <td className="border px-4 py-2">Pemrograman Web</td>
                          <td className="border px-4 py-2">Dr. Citra</td>
                          <td className="border px-4 py-2">Lab. 303</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <Button className="mt-6 bg-blue-500 hover:bg-blue-600">
                    Cetak Jadwal
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Studi;
