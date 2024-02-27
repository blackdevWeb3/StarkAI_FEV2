import React, { useEffect, useState } from "react";
import { GoogleLogin } from "google-login-react";
import { useUser } from "../context/UserContext";
import { Navigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { registerUserInfo, loginUserInfo } from "../actions/authActions";

const Login = () => {
  const { user, setUser }: any = useUser();
  const [actionState, setActionState] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onLogin = async (credentialResponse: any) => {
    if (!credentialResponse) return;

    const data = {
      username: credentialResponse.name,
      email: credentialResponse.email,
      avatar: credentialResponse.picture,
    };

    const result = await loginUserInfo(data);
    if (result.message === "Success") {
      setUser(JSON.stringify(data));
    }
    console.log("Result Message:", result.message);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (email && password) {
      const data = {
        email: email,
        username: "User",
        avatar: "avatar",
        password: password,
      };
      if (actionState) {
        const result = await loginUserInfo(data);
        setMessage(result.message);
        if (result.message === "Success") {
          setUser(JSON.stringify(data));
        }
      } else {
        const result = await registerUserInfo(data);
        setMessage(result.message);
      }
    } else setMessage("Check Email and Password");
  };

  useEffect(() => {
    setMessage("");
  }, [actionState]);

  if (user && user !== "None") {
    return <Navigate to="/app" />;
  }

  return (
    <div className="w-full h-screen bg-black font-chakra overflow-hidden transition-all duration-300 ease-in-out">
      <div className="w-full h-full flex flex-row justify-between items-center p-20 sm:p-10 z-10 relative">
        <div className="w-[380px] h-full px-12 md:px-8 lg:px-10 py-10 bg-[#171717] rounded-tl-lg rounded-bl-lg sm:w-full sm:rounded-tr-lg sm:rounded-br-lg sm:px-8">
          <div className="flex flex-col justify-between items-center gap-12 w-full">
            <div className="w-full flex flex-col gap-2 items-center">
              <img src="./favicon.ico" className="w-[64px]" alt="logo" />
              <div className="text-md font-bold mb-5">
                Sign up or Login with
              </div>
              <div
                className="w-full flex items-center justify-center"
                id="google_login"
              >
                <GoogleLogin
                  clientId={process.env.REACT_APP_CLIENT_ID!}
                  onSuccess={(res: any) => onLogin(res)}
                  onError={(err: any) => console.log(err)}
                >
                  <button className="login-button flex flex-row">
                    <Icon
                      icon="logos:google-icon"
                      className="h-[20px] w-auto"
                    />
                    <span className="">Google</span>
                  </button>
                </GoogleLogin>
              </div>
              <Link
                to="https://discord.com/invite/starkmeta"
                className="login-button"
              >
                <Icon
                  icon="logos:discord-icon"
                  className="text-white w-6 h-6"
                />
                <span className="flex w-full place-content-left text-white text-[14px] font-medium">
                  Discord
                </span>
              </Link>
            </div>
            <div className="h-[1px] w-full relative bg-white/10 flex items-center justify-center">
              <div className="flex text-[12px] items-center justify-center rounded-[50%] absolute z-10 w-[32px] h-[32px] bg-darkPrimary border border-white/10">
                OR
              </div>
            </div>
            <form className="flex flex-col gap-3 w-full">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-red-500 text-[14px]">{message}</span>
                <label
                  htmlFor="email"
                  className="text-[14px] font-medium text-white select-none"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@host.com"
                  autoComplete="username"
                  className="text-[14px] w-full rounded-[4px] h-10 px-3.5 py-2 bg-black/25 appearance-none outline-none invalid:focus:border-danger-primary placeholder:text-light-secondary text-white disabled:text-opacity-60 disabled:cursor-not-allowed"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-[14px] font-medium text-white select-none"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  className="text-[14px] rounded-[4px] px-3.5 py-2 h-10 bg-black/25 appearance-none outline-none invalid:focus:border-danger-primary placeholder:text-light-secondary text-white disabled:text-opacity-60 disabled:cursor-not-allowed"
                  required
                />
              </div>
              <span>
                <Link
                  to="/reset-password"
                  className="text-[14px] text-indigo-400"
                >
                  Forgot your password?
                </Link>
              </span>
              <div className="pt-[6px]">
                <button
                  className="button-color w-full h-12 text-[14px] rounded-[4px]"
                  onClick={handleSubmit}
                >
                  {actionState ? "Sign In" : "Sign Up"}
                </button>
              </div>
            </form>
            <span className="w-full flex flex-row gap-2 items-center justify-center pt-[6px]">
              <span className="text-[14px]">Need an account?</span>
              <button
                className="text-[14px] text-indigo-400"
                onClick={() => setActionState(!actionState)}
              >
                {actionState ? "Sign up" : "Sign In"}
              </button>
            </span>
          </div>
        </div>
        <div className="w-full background-board rounded-tr-lg rounded-br-lg sm:hidden"></div>
      </div>
      <div
        className="absolute w-full h-full min-h-screen opacity-25 bg-no-repeat bg-center bg-cover top-0"
        style={{
          backgroundImage: "url('/assets/characters/background.jpg')",
        }}
      ></div>
    </div>
  );
};

export default Login;
