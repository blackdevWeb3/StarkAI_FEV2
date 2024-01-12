import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppMainBoard from "./layouts/App/AppMainBoard";
import Login from "./layouts/LayoutLogin";
import Profile from "./components/Profile";
import AppHeader from "./layouts/App/AppHeader";
import LayoutDashboard from "./layouts/LayoutDashboard";
import Navbar from "./layouts/Navbar";

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
        <Route
          path="/app/dashboard"
          element={
            <>
              <AppHeader />
              <AppMainBoard />
            </>
          }
        />
        <Route
          path="/app/profile"
          element={
            <>
              <AppHeader />
              <Profile />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
