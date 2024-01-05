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
    <div className="flex bg-black justify-center">
      <div className="flex flex-col gap-4 text-white pt-36">
        <div className="text-2xl font-bold">READY TO USE STARKMETA?</div>
        <div className="text-xl">Sign in</div>
        <div className="w-full">
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
            size="large"
            width={360}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
