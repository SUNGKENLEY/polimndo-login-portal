
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Pengguna from "./pages/Pengguna";
import Studi from "./pages/Studi";
import TOEFL from "./pages/TOEFL";
import Perwalian from "./pages/Perwalian";
import FacultyDashboard from "./pages/FacultyDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

// Student routes
import StudentAccount from "./pages/StudentAccount";

// Faculty routes
import FacultyProfile from "./pages/FacultyProfile";
import FacultyTeaching from "./pages/FacultyTeaching";
import FacultyAdvisory from "./pages/FacultyAdvisory";
import FacultyResearch from "./pages/FacultyResearch";

// Admin routes
import UserManagement from "./pages/UserManagement";
import AcademicDB from "./pages/AcademicDB";
import Reports from "./pages/Reports";
import SystemSettings from "./pages/SystemSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Student Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pengguna" element={<Pengguna />} />
          <Route path="/student-account" element={<StudentAccount />} />
          <Route path="/studi" element={<Studi />} />
          <Route path="/toefl" element={<TOEFL />} />
          <Route path="/perwalian" element={<Perwalian />} />
          
          {/* Faculty Routes */}
          <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
          <Route path="/faculty-profile" element={<FacultyProfile />} />
          <Route path="/faculty-teaching" element={<FacultyTeaching />} />
          <Route path="/faculty-advisory" element={<FacultyAdvisory />} />
          <Route path="/faculty-research" element={<FacultyResearch />} />
          
          {/* Admin Routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/academic-db" element={<AcademicDB />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/system-settings" element={<SystemSettings />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
