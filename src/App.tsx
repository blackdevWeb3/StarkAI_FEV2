import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./layouts/LayoutLogin";
import LayoutDashboard from "./layouts/LayoutDashboard";
import Navbar from "./layouts/Navbar";
import AppLayout from "./layouts/App/AppLayout";
import Footer from "./layouts/Footer";
import RecentWorks from "./components/Dashboard/RecentWorks";
import { ModalContextProvider } from "./utils/modalContext";

function App() {
  return (
    <ModalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <LayoutDashboard />
                <RecentWorks />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/app/*" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </ModalContextProvider>
  );
}

export default App;
