import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./layouts/LayoutLogin";
import LayoutDashboard from "./layouts/LayoutDashboard";
import Navbar from "./layouts/Navbar";
import AppLayout from "./layouts/App/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LayoutDashboard />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/app/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
