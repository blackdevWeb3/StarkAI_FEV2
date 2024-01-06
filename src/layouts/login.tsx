import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const Login = () => {
  const { user, setUser }: any = useUser();
  if (user && user !== "none") {
    console.log(user);
    return <Navigate to="/" />;
  }
  return (
    <div className="flex bg-black justify-center" style={{ height: "100vh" }}>
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
          <a
            className="w-[360px] bg-white text-black flex px-3 py-2 rounded-md items-center cursor-pointer"
            href="https://discord.com/invite/starkmeta"
          >
            <Icon icon="logos:discord-icon" />
            <div
              className="flex w-full place-content-center text-gray-700"
              style={{
                fontFamily: "sans-serif",
                fontWeight: "450",
                fontSize: "14px",
              }}
            >
              Sign in with Discord
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
