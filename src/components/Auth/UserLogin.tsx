import { Link } from "react-router-dom";

import "./auth_style.css";

const UserLogin = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="flex relative bg-black_dark rounded-[10px] sm:mx-5 md:mx-5 mx-0">
        <div className="flex sm:hidden md:hidden h-full relative">
          <div id="user-signup-image">
            <div className="flex justify-center absolute bottom-0 w-full mb-8">
              <img
                src="/assets/img/StarkAILogo.svg"
                alt="logo"
                className="w-[154px] h-[39px]"
              ></img>
            </div>
            <img
              src="/assets/characters/background.jpg"
              className="rounded-tl-[10px] rounded-bl-[10px] w-[412px] h-[591px] object-cover object-top"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col relative bg-black_dark rounded-tr-[10px] rounded-br-[10px] rounded-tl-0 rounded-bl-0 sm:rounded-tl-[10px] md:rounded-tl-[10px] sm:rounded-bl-[10px] md:rounded-bl-[10px] sm:w-[335px] md:w-[335px] w-[407px]">
          <div
            id="user-signup-container"
            className="flex-1 sm:mx-6 md:mx-6 mx-10 sm:mt-6 md:mt-6 mt-10"
          >
            <div className="relative">
              <form>
                <div className="pb-3">
                  <h2 className="text-[24px] text-white sm:leading-7 md:leading-7 leading-8 font-bold sm:mb-4 md:mb-4 mb-6">
                    Sign in
                  </h2>
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch flex-col justify-start items-start gap-1.5 flex relative">
                      <div className="w-5 h-5 absolute top-[13px] left-[10px] text-[#E0E0E0]">
                        <img
                          src="https://candy.ai/assets/filled-email-fc90c315f269441fa73aa876a3941882f9f73cb588fe947851e3412c811e007e.svg"
                          alt="email"
                        />
                      </div>
                      <div className="input email required user_email w-full">
                        <input
                          className="string email required w-full pl-10 pr-6 py-3 rounded-[10px] border border-black_light bg-black_medium text-sm font-medium text-[#E0E0E0] placeholder-[#E0E0E0] border-textarea"
                          placeholder="E-mail"
                          type="email"
                          name="user[email]"
                          id="user_email"
                        />
                      </div>
                    </div>
                    <div className="w-full flex-col justify-start items-start inline-flex mt-6">
                      <div className="self-stretch flex-col justify-start items-start gap-1.5 flex relative">
                        <div className="w-5 h-5 absolute top-[13px] left-[10px]">
                          <img
                            src="https://candy.ai/assets/lock-04efd07dd546792702a534536fd638a4bc066c8c3bc6bdb5d5febf85c22f567e.svg"
                            alt="key"
                          />
                        </div>
                        <div className="w-5 h-5 absolute top-[13px] right-[10px]">
                          <img
                            src="https://candy.ai/assets/eye-6954483cd116fa391d5bf9d9252431d2ab19ac69e74f9b05d761ec5a6e51697b.svg"
                            className="password-toggle-icon cursor-pointer"
                            alt="eye"
                          />
                        </div>
                        <div className="input password required user_password w-full">
                          <input
                            className="password required w-full pl-10 pr-4 py-3 rounded-[10px] border border-black_light bg-black_medium text-sm font-medium text-[#E0E0E0] placeholder-[#E0E0E0]"
                            placeholder="password"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to=""
                  className="text-white mb-4 font-medium text-sm underline"
                >
                  Forgot password?
                </Link>
                <button
                  type="submit"
                  className="flex w-full mt-6 px-4 py-3 bg-[#E75275] rounded-[10px] justify-center items-center text-white text-sm font-semibold"
                >
                  Sign in
                </button>
              </form>
              <div className="flex flex-row items-center pt-8 pb-5">
                <div className="flex-1 h-[1px] border-gradient-left"></div>
                <div className="flex-0 text-white text-sm font-medium mx-4">
                  or sign in with
                </div>
                <div className="flex-1 h-[1px] border-gradient-right"></div>
              </div>
              <div className="" id="authentication_sign_up_container">
                <button className="inline-flex items-center justify-center w-full rounded-[10px] px-4 py-2.5 mb-2.5 bg-white">
                  <img
                    alt="Google"
                    className="h-6 w-6 mr-3"
                    src="https://candy.ai/assets/google-auth-a8a364c5c399770d07ce74e6110a120970b1953557a47719692d85ea9334efb6.png"
                  />
                  <div className="font-normal text-[#344054]">Google</div>
                </button>
                <div className="flex flex-wrap gap-2.5">
                  <div className="flex-1">
                    <Link
                      to="https://discord.com/invite/starkmeta"
                      className="inline-flex items-center justify-center w-full font-normal rounded-[10px] px-4 py-2.5 bg-discord_indigo border-discord_indigo text-white"
                    >
                      <img
                        alt="discord"
                        className="h-6 w-6 mr-3"
                        src="https://candy.ai/assets/discord-e159d04d15be58e9fe9767c08b3338ee2735feb84f54b7301303c9c49ed543a2.svg"
                      />
                      <div className="text-white font-normal ">Discord</div>
                    </Link>
                  </div>
                  <div className="flex-1">
                    <Link
                      to="https://twitter.com/Starkmetagame"
                      className="inline-flex items-center justify-center w-full font-normal text-[#344054] rounded-[10px] px-4 py-2.5 bg-white"
                    >
                      <img
                        src="https://candy.ai/assets/X-26904e26c6e97e747b58528737ef2a47ec6a26e01283df190498f526760cf325.svg"
                        alt="twitter"
                      />
                      <div className="font-normal text-[#344054]">X</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-0 px-8 w-full h-0 opacity-20 border-[0.5px]"></div>
          <div className="flex flex-row mt-5 font-medium text-sm justify-center items-center text-white px-8 mb-5">
            Don't have an account yet? &nbsp;
            <Link
              to="/users/sign-in"
              className="text-[#E75275] text-sm font-semibold leading-normal cursor-pointer"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
