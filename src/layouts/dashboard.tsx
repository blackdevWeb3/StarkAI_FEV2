import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user }: any = useUser();
  if (user === "none") {
    return <Navigate to="/login" />;
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
