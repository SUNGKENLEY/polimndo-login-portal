
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

const FacultyResearch = () => {
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

  const researchProjects = [
    {
      id: 1,
      title: "Pengembangan Aplikasi Pembelajaran Berbasis Augmented Reality",
      role: "Ketua Peneliti",
      status: "active",
      year: "2024-2025",
      funding: "DIKTI",
      amount: "Rp 150.000.000",
      collaborators: ["Dr. Joko Widodo", "Dr. Siti Aminah"]
    },
    {
      id: 2,
      title: "Analisis Efektivitas Pembelajaran Daring pada Masa Pandemi",
      role: "Anggota Peneliti",
      status: "completed",
      year: "2023-2024",
      funding: "Internal Universitas",
      amount: "Rp 50.000.000",
      collaborators: ["Dr. Ahmad Dahlan", "Dr. Rina Mardiana"]
    },
    {
      id: 3,
      title: "Implementasi Machine Learning untuk Deteksi Plagiarisme",
      role: "Anggota Peneliti",
      status: "planned",
      year: "2025-2026",
      funding: "Kementerian Riset",
      amount: "Rp 200.000.000",
      collaborators: ["Prof. Sutomo", "Dr. Kartini"]
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Implementasi Augmented Reality dalam Pembelajaran STEM",
      journal: "Jurnal Pendidikan Teknologi",
      year: 2024,
      indexing: "SINTA 2",
      type: "journal"
    },
    {
      id: 2,
      title: "Evaluasi Model Pembelajaran Hybrid di Era Post-Pandemi",
      conference: "International Conference on Education Technology",
      location: "Bali, Indonesia",
      year: 2023,
      type: "conference"
    },
    {
      id: 3,
      title: "Artificial Intelligence dalam Asesmen Pembelajaran: Tantangan dan Peluang",
      journal: "International Journal of Assessment and Learning",
      year: 2023,
      indexing: "Scopus Q2",
      type: "journal"
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
              <Link to="/faculty-advisory" className="flex items-center px-4 py-3 hover:bg-blue-700">
                <ListTodo className="h-5 w-5 mr-3" />
                <span>Perwalian</span>
              </Link>
            </li>
            <li>
              <Link to="/faculty-research" className="flex items-center px-4 py-3 bg-blue-700">
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
          <h1 className="text-2xl font-semibold mb-6">Penelitian dan Publikasi</h1>
          
          <Card className="shadow-sm mb-6">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Proyek Penelitian</h3>
                <Button className="bg-blue-500 hover:bg-blue-600">+ Tambah Proyek</Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Judul</TableHead>
                    <TableHead>Tahun</TableHead>
                    <TableHead>Peran</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {researchProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.title}</TableCell>
                      <TableCell>{project.year}</TableCell>
                      <TableCell>{project.role}</TableCell>
                      <TableCell>
                        {project.status === "active" && <Badge className="bg-green-500">Aktif</Badge>}
                        {project.status === "completed" && <Badge className="bg-blue-500">Selesai</Badge>}
                        {project.status === "planned" && <Badge className="bg-yellow-500">Direncanakan</Badge>}
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Detail</Button>
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
                <h3 className="text-lg font-medium">Publikasi</h3>
                <Button className="bg-blue-500 hover:bg-blue-600">+ Tambah Publikasi</Button>
              </div>
              
              <div className="space-y-4">
                {publications.map((pub) => (
                  <div key={pub.id} className="p-4 border rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{pub.title}</h4>
                      <Badge>{pub.year}</Badge>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      {pub.type === "journal" ? (
                        <>
                          <p>Jurnal: {pub.journal}</p>
                          <p>Indeksasi: {pub.indexing}</p>
                        </>
                      ) : (
                        <>
                          <p>Konferensi: {pub.conference}</p>
                          <p>Lokasi: {pub.location}</p>
                        </>
                      )}
                    </div>
                    <div className="mt-2">
                      <Button variant="outline" size="sm">Lihat Detail</Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex justify-center">
                <Button variant="outline">Lihat Semua Publikasi</Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default FacultyResearch;
