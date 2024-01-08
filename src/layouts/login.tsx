import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useUser } from "../context/UserContext";
import { Navigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";

const Login = () => {
  const { user, setUser }: any = useUser();
  if (user && user !== "none") {
    return <Navigate to="/app/dashboard" />;
  }

  const onLogin = async (credentialResponse: any) => {
    if (!credentialResponse.credential) return;
    let googleData: { name: string; email: string } = jwtDecode(
      credentialResponse.credential
    );
    const data = {
      username: googleData.name,
      email: googleData.email,
    };
    console.log(process.env.REACT_APP_BACKEND_API);
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/login`,
      data
    );
    if (res.data.message === "Success") {
      console.log("Success");
    } else {
      console.log("Fail");
    }
    setUser(JSON.stringify(data));
  };

  return (
    <div className="p-10 w-full h-screen bg-black">
      <div className="w-full h-full flex flex-row justify-between items-center">
        <div className="w-[380px] h-full px-16 py-10 bg-darkPrimary rounded-tl-lg rounded-bl-lg">
          <div className="flex flex-col justify-between items-center gap-8">
            <div className="w-full flex flex-col gap-2 items-center">
              <img src="./favicon.ico" className="w-[64px]" alt="logo" />
              <div className="text-md font-bold">Sign up or Login with</div>
              <GoogleLogin
                onSuccess={(credentialResponse) => onLogin(credentialResponse)}
                onError={() => {
                  console.log("Login Failed");
                }}
                size="large"
              />
              <Link
                to="https://discord.com/invite/starkmeta"
                className="bg-gray-700 flex px-3 py-2 rounded-md items-center cursor-pointer w-full gap-2"
              >
                <Icon icon="ic:round-discord" className="text-white w-6 h-6" />
                <span className="flex w-full place-content-left text-white text-[14px] font-medium">
                  Discord
                </span>
              </Link>
            </div>
            <div className="h-[1px] w-full relative bg-white/10">
              <div className="flex text-[12px] items-center justify-center rounded-[50%] absolute z-10 right-[100px] w-[32px] h-[32px] bg-darkPrimary border border-white/10 mt-[-16px]">
                OR
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[14px] font-medium lg:text-s text-white select-none">
                  Email
                </label>
                <input
                  placeholder="name@host.com"
                  className="text-[14px] rounded-lg px-3.5 py-2 bg-black/25 appearance-none outline-none invalid:focus:border-danger-primary placeholder:text-light-secondary text-white disabled:text-opacity-60 disabled:cursor-not-allowed"
                ></input>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[14px] font-medium lg:text-s text-white select-none">
                  Password
                </label>
                <input className="text-[14px] rounded-lg px-3.5 py-2 bg-black/25 appearance-none outline-none invalid:focus:border-danger-primary placeholder:text-light-secondary text-white disabled:text-opacity-60 disabled:cursor-not-allowed"></input>
              </div>
              <span className="">
                <Link
                  to="/reset-password"
                  className="text-[14px] text-indigo-400"
                >
                  Forgot your password?
                </Link>
              </span>
              <div className="pt-[6px]">
                <button className="button-color w-full h-[38px] text-[14px] rounded-md">
                  Sign in
                </button>
              </div>
              <span className="w-full flex flex-row gap-2 items-center justify-center pt-[6px]">
                <span className="text-[14px]">Need an account?</span>
                <Link to="/register" className="text-[14px] text-indigo-400">
                  Sign up
                </Link>
              </span>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="w-full background-board rounded-tr-lg rounded-br-lg"></div>
      </div>
    </div>
  );
};

export default Login;
