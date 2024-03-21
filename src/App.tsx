import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./layouts/LayoutLogin";
import LayoutDashboard from "./layouts/LayoutDashboard";
import Navbar from "./layouts/Navbar";
import AppLayout from "./layouts/App/AppLayout";
import Footer from "./layouts/Footer";
import RecentWorks from "./components/Dashboard/RecentWorks";
import { ModalContextProvider } from "./context/modalContext";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog";
import BlogPost from "./components/Blog/BlogPost";
import UserLogin from "./components/Auth/UserLogin";
import UserRegister from "./components/Auth/UserRegiser";
import TestNavbar from "./layouts/TestNavbar";
import TestLayoutDashboard from "./layouts/TestLayoutDashboard";
import RewardPathway from "./components/Dashboard/RewardPathway";
import TestFooter from "./layouts/TestFooter";

interface LayoutWithNavbarAndFooterProps {
  children: React.ReactNode;
}

function LayoutWithNavbarAndFooter({
  children,
}: LayoutWithNavbarAndFooterProps) {
  return (
    <>
      <TestNavbar />
      {children}
      <TestFooter />
    </>
  );
}

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <ModalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/test"
            element={
              <>
                <Navbar />
                <RewardPathway />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <LayoutWithNavbarAndFooter>
                <TestLayoutDashboard />
                <RecentWorks />
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path="/contact-us"
            element={
              <LayoutWithNavbarAndFooter>
                <ContactUs />
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path="/news"
            element={
              <LayoutWithNavbarAndFooter>
                <Blog />
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path="/news/:post"
            element={
              <LayoutWithNavbarAndFooter>
                <BlogPost />
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/app/*"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          />
          <Route path="/users/sign-up" element={<UserRegister />} />
          <Route path="/users/sign-in" element={<UserLogin />} />
          {/* <Route path="/splash/" element={<SplashScreen />} /> */}
        </Routes>
      </BrowserRouter>
    </ModalContextProvider>
  );
}

export default App;
