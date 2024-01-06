import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import MainBoard from "./MainBoard";

const Dashboard = () => {
  const { user }: any = useUser();

  console.log(user);
  if (user === undefined || user === "none") {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <MainBoard />
    </>
  );
};

export default Dashboard;
