import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { user, setUser }: any = useUser();
  if (user !== "none") {
    console.log(user);
    return <Navigate to="/" />;
  }
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          if (!credentialResponse.credential) return;
          let data: { email: string } = jwtDecode(
            credentialResponse.credential
          );
          setUser(JSON.stringify(data));
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </>
  );
};

export default Login;
