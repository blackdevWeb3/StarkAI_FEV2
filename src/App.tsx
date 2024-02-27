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

interface LayoutWithNavbarAndFooterProps {
  children: React.ReactNode;
}

function LayoutWithNavbarAndFooter({
  children,
}: LayoutWithNavbarAndFooterProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
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
            path="/"
            element={
              <LayoutWithNavbarAndFooter>
                <LayoutDashboard />
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
          {/* <Route path="/splash/" element={<SplashScreen />} /> */}
        </Routes>
      </BrowserRouter>
    </ModalContextProvider>
  );
}

export default App;
