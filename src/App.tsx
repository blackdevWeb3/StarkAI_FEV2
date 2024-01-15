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
        <Route path="/app" element={<AppLayout />} />
        {/* <Route
          path="/app/profile"
          element={
            <>
              <Profile />
            </>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
