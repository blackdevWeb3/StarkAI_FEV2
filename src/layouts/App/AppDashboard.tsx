import { useUser } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import MainBoard from "./MainBoard";

const AppDashboard = () => {
  const { user }: any = useUser();

  if (user === undefined || user === "none") {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <MainBoard />
    </>
  );
};

export default AppDashboard;
