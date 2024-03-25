import { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { GoogleLogin } from "google-login-react";
import { Icon } from "@iconify/react";
import { loginUserInfo } from "../../actions/authActions";
import Cookies from "js-cookie";
import { LeftBGStyle } from "../../assets";
import { useUser } from "../../config/context/UserContext";

import "./auth_style.css";

const UserLogin = () => {
  const { user, setUser }: any = useUser();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [visibleState, setVisibleState] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const onLogin = async (credentialResponse: any) => {
    if (!credentialResponse) return;

    const data = {
      username: credentialResponse.name,
      email: credentialResponse.email,
      avatar: credentialResponse.picture,
    };

    const result = await loginUserInfo(data);
    if (result.message === "Success") {
      Cookies.set("userSession", JSON.stringify(data), {
        expires: 1,
        secure: true,
        httpOnly: true,
        sameSite: "Strict",
      });
      setUser(JSON.stringify(data));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email, username: "User", avatar: "avatar", password };
    const result = await loginUserInfo(data);
    setMessage(result.message);
    if (result.message === "Success") {
      Cookies.set("userSession", JSON.stringify(data), {
        expires: 1,
        secure: true,
        httpOnly: true,
        sameSite: "Strict",
      });
      setUser(JSON.stringify(data));
    }
  };

  useEffect(() => {
    const userSession = Cookies.get("userSession");
    if (userSession) {
      setUser(userSession);
    }
  });

  if (user && user !== "None") {
    return <Navigate to="/app" />;
  }

  return (
    <div className="w-full h-full min-h-screen py-10 bg-black flex justify-center items-center font-kanit">
      <div className="flex relative bg-black_dark rounded-[10px] sm:mx-5 md:mx-5 mx-0">
        <div className="flex sm:hidden md:hidden h-full relative">
          <div id="user-signup-image">
            <img
              src="/assets/img/auth_background.svg"
              className="rounded-tl-[10px] rounded-bl-[10px] w-[412px] h-[700px] object-cover object-top"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col z-10 overflow-hidden relative bg-[#1c1b1b] rounded-tr-[10px] rounded-br-[10px] rounded-tl-0 rounded-bl-0 sm:rounded-tl-[10px] md:rounded-tl-[10px] sm:rounded-bl-[10px] md:rounded-bl-[10px] sm:w-[335px] md:w-[335px] w-[407px]">
          <div className="w-full pt-[10px] flex justify-end pr-8">
            <img
              src="/starkMeta_logo.svg"
              alt="logo"
              className="w-[140px]"
            ></img>
          </div>
          <div
            id="user-signIn-container"
            className="flex flex-1 items-center justify-center sm:mx-6 md:mx-6 mx-8 my-auto z-20"
          >
            <div className="relative">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <h2 className="text-[24px] text-white sm:leading-7 md:leading-7 font-medium sm:mb-4 md:mb-4 text-center">
                    Login Account
                  </h2>
                  <span className="text-[11px] leading-normal font-[275] text-center">
                    Begin your journey with Stark AI by creating an account.
                    Unlock personalized AI tools and insights, and stay ahead
                    with our innovative solutions
                  </span>

                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex mt-[16px]">
                    <span className="text-red-500 text-[12px]">{message}</span>
                    <div className="self-stretch flex-col justify-start items-start gap-1.5 flex relative z-20">
                      <div className="w-5 h-5 absolute top-[13px] left-[16px] text-[#E0E0E0]">
                        <img
                          src="https://candy.ai/assets/filled-email-fc90c315f269441fa73aa876a3941882f9f73cb588fe947851e3412c811e007e.svg"
                          alt="email"
                        />
                      </div>
                      <div className="input email required user_email w-full">
                        <input
                          className="string email required font-[275] w-full pl-12 pr-6 py-3 rounded-[39px] border border-black_light bg-[#333535] text-sm text-[#fff] placeholder-[#fff] border-textarea"
                          placeholder="Email Address"
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="current-email"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full flex-col justify-start items-start inline-flex mt-1 z-20">
                      <div className="self-stretch flex-col justify-start items-start gap-1.5 flex relative">
                        <div className="w-5 h-5 absolute top-[13px] left-[16px]">
                          <img
                            src="https://candy.ai/assets/lock-04efd07dd546792702a534536fd638a4bc066c8c3bc6bdb5d5febf85c22f567e.svg"
                            alt="key"
                          />
                        </div>
                        <button
                          className="w-5 h-5 absolute top-[13px] right-[10px]"
                          onClick={(e) => {
                            e.preventDefault();
                            setVisibleState(!visibleState);
                          }}
                        >
                          <Icon
                            icon={`${
                              !visibleState ? "ion:eye" : "mdi:eye-off"
                            }`}
                            width={20}
                            color="#E0E0E0"
                          />
                        </button>
                        <div className="input password required user_password w-full">
                          <input
                            type={`${!visibleState ? "password" : "string"}`}
                            id="password"
                            autoComplete="on"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="password required h-12 w-full pl-12 pr-4 py-3 rounded-[39px] border border-black_light bg-[#333535] text-sm font-[275] text-[#fff] placeholder-[#fff]"
                            placeholder="Password"
                            required
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[12px] flex flex-row items-center justify-between">
                  <div className="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-[#333535] bg-[#333535] border-[#6E6969] rounded focus:ring-[#333535] focus:ring-2 checked:bg-[#333535] active:bg-[#333535]"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 text-sm font-[300] text-white select-none sm:text-[12px] md:text-[12px]"
                    >
                      Save Password
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-white mb-4 font-[275] text-sm underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  style={{
                    background:
                      "linear-gradient(90deg, #DD00AC 0%, #3F3883 100%)",
                  }}
                  className="flex gradient-bg w-full h-[42px] px-4 py-3 rounded-[35px] justify-center items-center text-white text-sm font-medium leading-normal"
                >
                  Login Now
                </button>
              </form>
              <div className="flex flex-row items-center pt-5 pb-5">
                <div className="flex-1 h-[1px] border-gradient-left"></div>
                <div className="flex-0 text-white text-sm font-[300] mx-4">
                  OR
                </div>
                <div className="flex-1 h-[1px] border-gradient-right"></div>
              </div>
              <div className="" id="authentication_sign_up_container">
                <div className="flex flex-wrap gap-5 sm:gap-[2px] md:gap-[2px] md:flex-col sm:flex-col">
                  <div className="flex-1">
                    <button className="inline-flex items-center justify-between w-full rounded-[39px] mb-2.5 bg-[#333535] py-[1px] group text-center">
                      <div className="inline-flex bg-white w-10 h-10 rounded-full items-center justify-center">
                        <img
                          alt="Google"
                          className="h-6 w-6"
                          src="https://candy.ai/assets/google-auth-a8a364c5c399770d07ce74e6110a120970b1953557a47719692d85ea9334efb6.png"
                        />
                      </div>
                      <div className="font-[400] text-[#fff] text-[12px] group-hover:text-[#DD00AC] text-center w-[calc(100%-36px)]">
                        <GoogleLogin
                          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
                          onSuccess={(res: any) => onLogin(res)}
                          onError={(err: any) => console.log(err)}
                        >
                          <span> Login with Google</span>
                        </GoogleLogin>
                      </div>
                    </button>
                  </div>
                  <div className="flex-1">
                    <Link
                      to="https://discord.com/invite/starkmeta"
                      className="inline-flex items-center justify-between w-full rounded-[39px] mb-2.5 bg-[#333535] py-[1px] group"
                    >
                      <div className="inline-flex bg-white w-10 h-10 rounded-full items-center justify-center">
                        <Icon
                          icon="flowbite:discord-solid"
                          className="text-[#5865f2] h-7 w-7"
                        />
                      </div>
                      <div className="font-[400] text-[#fff] text-[12px] group-hover:text-[#DD00AC] text-center w-[calc(100%-36px)]">
                        Login with Discord
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-5 font-[350] text-sm justify-center items-center text-[#939595] px-8 mb-5">
            Don't have an account yet? &nbsp;
            <Link
              to="/register"
              className="text-[#DD00AC] text-sm font-semibold leading-[35px] cursor-pointer z-20"
            >
              Sign up
            </Link>
          </div>
          <span className="absolute z-1 top-[300px] left-[-160px]">
            <LeftBGStyle />
          </span>
          <span className="absolute z-1 w-[80px] h-[280px] bg-[#DD00AC] rounded-[281px] blur-[168px] right-20 top-[-120px]"></span>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
