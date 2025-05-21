
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./components/layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import VendorsPage from "./pages/dashboard/VendorsPage";
import CustomersPage from "./pages/dashboard/CustomersPage";
import RoomsPage from "./pages/dashboard/RoomsPage";
import BookingsPage from "./pages/dashboard/BookingsPage";
import ProfilePage from "./pages/dashboard/ProfilePage";
import { AuthProvider } from "./context/AuthContext";
import AuthGuard from "./components/AuthGuard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AuthGuard>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="" element={<DashboardHome />} />
                <Route path="vendors" element={<VendorsPage />} />
                <Route path="customers" element={<CustomersPage />} />
                <Route path="rooms" element={<RoomsPage />} />
                <Route path="bookings" element={<BookingsPage />} />
                <Route path="profile" element={<ProfilePage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthGuard>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
