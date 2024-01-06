import "./App.css";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Dashboard from "./layouts/dashboard";
import Login from "./layouts/login";
import Profile from "./components/Profile";
import Header from "./layouts/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header /> <Dashboard />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
