import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainBoard from "./MainBoard";

const Dashboard = () => {
  const { user }: any = useUser();
  if (user === "none") {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Header />
      <MainBoard />
      <Footer />
    </>
  );
};

export default Dashboard;
