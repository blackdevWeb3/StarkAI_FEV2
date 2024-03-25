import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { GoogleLogin } from "google-login-react";
import { Icon } from "@iconify/react";
import { LeftBGStyle } from "../../assets";

import "./auth_style.css";
import { registerUserInfo } from "../../actions/authActions";

const UserRegister = () => {
  const [message, setMessage] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [visiblePasswordState, togglePasswordState] = useState<boolean>(false);
  const [visibleConfirmPasswordState, toggleConfirmPasswordState] =
    useState<boolean>(false);
  const [agreement, setAgreement] = useState<boolean>(false);

  const onRegister = async (credentialResponse: any) => {
    if (!credentialResponse) return;

    const data = {
      username: credentialResponse.name,
      email: credentialResponse.email,
      avatar: credentialResponse.picture,
    };

    const result = await registerUserInfo(data);
    setMessage(result.message);
    if (result.message === "User registered successfully")
      window.location.href = "/login";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      console.log("credential:", email, password);
      const data = {
        email,
        username: firstName + " " + lastName,
        avatar: "avatar",
        password,
      };

      const result = await registerUserInfo(data);
      setMessage(result.message);
      if (result.message === "User registered successfully")
        window.location.href = "/login";
    } else setMessage("Passwords are not match!");
  };

  return (
    <div className="w-full h-full min-h-screen py-10 bg-black flex justify-center items-center font-kanit">
      <div className="flex relative bg-black_dark rounded-[10px] sm:mx-5 md:mx-5 mx-0">
        <div className="flex sm:hidden md:hidden h-full relative">
          <div id="user-signUp-image">
            <img
              src="assets/img/auth_background.svg"
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
            id="user-signUp-container"
            className="flex-1 sm:mx-6 md:mx-6 mx-8 sm:mt-6 md:mt-6 mt-10 z-20"
          >
            <div className="relative">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <h2 className="text-[24px] text-white sm:leading-7 md:leading-7 font-medium sm:mb-4 md:mb-4 text-center">
                    Create Account
                  </h2>
                  <span className="text-[11px] leading-normal font-[275] text-center">
                    Begin your journey with Stark AI by creating an account.
                    Unlock personalized AI tools and insights, and stay ahead
                    with our innovative solutions
                  </span>
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex mt-[16px]">
                    <span className="text-red-500 text-[12px]">{message}</span>
                    <div className="self-stretch flex-row justify-start items-start gap-1.5 flex relative mb-[4px] z-20">
                      <div className="w-1/2">
                        <div className="w-5 h-5 absolute top-[13px] left-[16px] text-[#E0E0E0]">
                          <Icon
                            icon="ph:user-fill"
                            width={20}
                            color="#8d8d8d"
                          />
                        </div>
                        <div className="input email required user_email w-full">
                          <input
                            className="string email required font-[275] w-full pl-12 pr-6 py-3 rounded-[39px] border border-black_light bg-[#333535] text-sm text-[#fff] placeholder-[#fff] border-textarea"
                            placeholder="First name"
                            type="string"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            name="firstName"
                            id="first_name"
                            autoComplete="first_name"
                            required
                          />
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="w-5 h-5 absolute top-[13px] left-[16px] text-[#E0E0E0]">
                          <Icon
                            icon="ph:user-fill"
                            width={20}
                            color="#8d8d8d"
                          />
                        </div>
                        <div className="input email required user_email w-full">
                          <input
                            className="string email required font-[275] w-full pl-5 pr-6 py-3 rounded-[39px] border border-black_light bg-[#333535] text-sm text-[#fff] placeholder-[#fff] border-textarea"
                            placeholder="Last name"
                            type="string"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            autoComplete="last_name"
                            name="lastName"
                            id="lastName"
                            required
                          />
                        </div>
                      </div>
                    </div>
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
                          name="user[email]"
                          id="user_email"
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
                            togglePasswordState(!visiblePasswordState);
                          }}
                        >
                          <Icon
                            icon={`${
                              !visiblePasswordState ? "ion:eye" : "mdi:eye-off"
                            }`}
                            width={20}
                            color="#E0E0E0"
                          />
                        </button>
                        <div className="input password required user_password w-full">
                          <input
                            type={`${
                              !visiblePasswordState ? "password" : "string"
                            }`}
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
                            toggleConfirmPasswordState(
                              !visibleConfirmPasswordState
                            );
                          }}
                        >
                          <Icon
                            icon={`${
                              !visibleConfirmPasswordState
                                ? "ion:eye"
                                : "mdi:eye-off"
                            }`}
                            width={20}
                            color="#E0E0E0"
                          />
                        </button>
                        <div className="input password required user_password w-full">
                          <input
                            type={`${
                              !visibleConfirmPasswordState
                                ? "password"
                                : "string"
                            }`}
                            id="confirm_password"
                            autoComplete="on"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="password required h-12 w-full pl-12 pr-4 py-3 rounded-[39px] border border-black_light bg-[#333535] text-sm font-[275] text-[#fff] placeholder-[#fff]"
                            placeholder="Confirm Password"
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
                      checked={agreement}
                      onChange={(e) => setAgreement(e.target.checked)}
                      className="w-4 h-4 text-[#333535] bg-[#333535] border-[#6E6969] rounded focus:ring-[#333535] focus:ring-2 checked:bg-[#333535] active:bg-[#333535]"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 text-sm font-[300] text-white select-none sm:text-[12px] md:text-[12px]"
                    >
                      I agree to all terms & Conditions
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  style={{
                    background: !agreement
                      ? "#333535"
                      : "linear-gradient(90deg, #DD00AC 0%, #3F3883 100%)",
                  }}
                  disabled={!agreement}
                  className="flex w-full h-[42px] px-4 py-3 rounded-[35px] justify-center items-center text-white text-sm font-medium leading-normal transition-all duration-300 ease-in-out"
                >
                  Create Account
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
                          onSuccess={(res: any) => onRegister(res)}
                          onError={(err: any) => console.log(err)}
                        >
                          <span> Sign Up with Google</span>
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
                        Sign Up with Discord
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-5 font-[350] text-sm justify-center items-center text-[#939595] px-8 mb-5">
            Already have an account? &nbsp;
            <Link
              to="/login"
              className="text-[#DD00AC] text-sm font-semibold leading-[35px] cursor-pointer z-20"
            >
              Login
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

export default UserRegister;
