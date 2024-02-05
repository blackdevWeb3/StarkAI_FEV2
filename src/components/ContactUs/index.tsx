import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const ContactUs = () => {
  const [token, setToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const form = useRef<HTMLFormElement>(null);

  const onLoad = () => {
    if (captchaRef.current) {
      captchaRef.current.execute();
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChangeName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  const handleInputChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleInputChangePhone = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhone(event.target.value);
  };

  const handleVerify = (token: string, _ekey: string) => {
    setToken(token);
  };

  const handleInputChangeMessage: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (event) => {
    setMessage(event.target.value);
  };

  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;

  if (typeof serviceID !== "string" || typeof templateID !== "string") {
    throw new Error("Service ID or Template ID is undefined");
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!token) {
      alert("Please verify the reCAPTCHA!");
    } else {
      const newFormData = [
        {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
      ];
      emailjs
        .sendForm(
          serviceID,
          templateID,
          event.target as HTMLFormElement,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result: any) => {
            alert("message sent successfully...");
            console.log(result.text);
          },
          (error: any) => {
            console.log(error.text);
          }
        );

      // make form submission
      alert("Form submission successful!");
    }
  };
  useEffect(() => {
    if (token) console.log(`hCaptcha Token: ${token}`);
  }, [token]);
  return (
    <div className="overflow-x-clip">
      <div className="pt-[216px] pb-[76px] px-5 relative m-0 xl:pt-[185px] lg:pt-[150px] lg:px-[100px] md:pt-[150px] sm:px-0 sm:pt-[98px] sm:pb-12 contact-board">
        <div className="max-w-[1174px] min-w-0 mx-auto">
          <div className="flex flex-row sm:flex-col">
            <div className="w-[56%] sm:w-full md:w-[51%]">
              <div className="relative z-[9]">
                <div className="">
                  <div className="m-5 ml-[21px] sm:ml-5">
                    <div className="relative text-left">
                      <div className="inline-block relative max-w-full w-[400px] md:w-[281px] sm:w-[331px]">
                        <img
                          src="./assets/img/Contact-Us.svg"
                          alt="contactUs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="m-5 mt-[-41px] md:mb-[3px] sm:mb-[3px] sm:mt-[-36px]">
                    <h2 className="relative z-[0] m-0 p-0 font-Overpass leading-[1.4] tracking-[0px] font-semibold text-[46px] lg:text-[36.8px] md:text-[45px] sm:text-[40px]">
                      <span className="adrestus-color">Contact Us</span>
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="m-5 mt-1 md:mb-[35px] sm:mt-[15px]">
                    <div className="w-full relative flex text-left">
                      <span className=" absolute sm:text-[16px] text-[18px] tracking-[.3em] top-[1.5px] block leading-none text-[#39CCEC] filter-blur">
                        LET'S CREATE STUFF
                      </span>
                      <h3 className="sm:text-[16px] text-[18px] tracking-[.3em] relative z-10 text-[#39CCEC] font-semibold leading-[1.4] font-Overpass">
                        LET'S CREATE STUFF
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="pt-5">
                  <div className="m-5 mt-10 sm:mt-5">
                    <div>
                      <div className="contact-parent">
                        <div className="mb-[44px] sm:mb-0 sm:mr-0 sm:basis-1/2 sm:max-w-1/2 sm:pl-[23px] contact-info">
                          <h4 className="mb-3 text-white font-Overpass font-semibold leading-[1.4] tracking-[0px]">
                            Address
                          </h4>
                          <p className="font-Poppins mb-[10px] text-[14px] font-normal leading-[2] md:text-[12px] sm:text-[12px]">
                            Paphos, Cyprus
                          </p>
                          <p className="font-Poppins mb-[10px] text-[14px] font-normal leading-[2] md:text-[12px] sm:text-[12px]">
                            Cyprus 1225
                          </p>
                        </div>
                        <div className="flex flex-col sm:pl-[23px] contact-info-2 sm:basis-1/2 sm:max-w-1/2 sm:mb-0">
                          <h4 className="mb-3 text-white font-Overpass font-semibold leading-[1.4] tracking-[0px]">
                            Contacts
                          </h4>
                          <Link
                            to="mailto:info@adrestus.com"
                            className="font-Poppins mb-[10px] text-[14px] font-normal leading-[2] md:text-[12px] sm:text-[12px] text-[#4D546C] hover:text-[#31C3A8] transition-all duration-200 ease-in-out"
                          >
                            info@adrestus.net
                          </Link>
                          <Link
                            to="https://www.adrestus.net/contact-us/tel:00000000"
                            className="font-Poppins mb-[10px] text-[14px] font-normal leading-[2] md:text-[12px] sm:text-[12px] text-[#4D546C] hover:text-[#31C3A8] transition-all duration-200 ease-in-out"
                          >
                            000 000 0000
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[44%] sm:w-full md:w-[49%] flex flex-auto">
              <div className="relative z-[9] bg-[#0D1517] flex flex-auto flex-col shrink w-full max-w-full min-w-[1px] justify-start rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] px-[30px] pb-[53px] md:px-3 sm:px-1 sm:pb-[30px] sm:mx-5 sm:mt-[60px]">
                <div>
                  <div className="mx-5 mt-[-17px] mb-50px md:mt-[-13px] sm:mt-[-13px] sm:mb-5">
                    <h4 className="font-bold font-Overpass leading-[1.4] tracking-[0px] text-center text-[26px] m-0 p-0 lg:text-[20.8px] md:text-[20px] sm:text-[20px]">
                      <span className="adrestus-color">Contact Form</span>
                    </h4>
                  </div>
                </div>
                <div>
                  <div className="p-5 pt-16">
                    <form ref={form} onSubmit={handleSubmit}>
                      <div className="flex flex-col w-full">
                        <div className="mb-[25px]">
                          <p>
                            <span className="relative">
                              <input
                                className="w-full font-Poppins rounded border border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50 text-white/70"
                                placeholder="Name"
                                type="text"
                                name="name"
                                required
                                value={name}
                                onChange={handleInputChangeName}
                              ></input>
                            </span>
                          </p>
                        </div>
                        <div className="mb-[25px]">
                          <p>
                            <span className="relative">
                              <input
                                className="w-full text-white/70 rounded border font-Poppins border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                                value={email}
                                onChange={handleInputChangeEmail}
                              ></input>
                            </span>
                          </p>
                        </div>
                        <div className="mb-[25px]">
                          <p>
                            <span className="relative">
                              <input
                                className="w-full text-white/70 rounded border font-Poppins border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                                placeholder="Phone"
                                type="tel"
                                name="phone"
                                required
                                value={phone}
                                onChange={handleInputChangePhone}
                              ></input>
                            </span>
                          </p>
                        </div>
                        <div className="mb-[25px]">
                          <p>
                            <span className="relative">
                              <textarea
                                className="w-full text-white/70 rounded border font-Poppins border-primary-700/70 bg-primary-100/20 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                                placeholder="Message"
                                name="message"
                                value={message}
                                onChange={handleInputChangeMessage}
                              ></textarea>
                            </span>
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <HCaptcha
                            sitekey={
                              process.env.REACT_APP_HCAP_SITE_KEY ||
                              "your_fallback_site_key_here"
                            }
                            onLoad={onLoad}
                            onVerify={handleVerify}
                            ref={captchaRef}
                          />
                        </div>
                        <div className="pt-8">
                          <button
                            type="submit"
                            className="flex justify-center items-center colorBtn px-auto py-5 text-center w-[185px] md:w-[115px] md:h-[39px] sm:w-[144px] sm:h-[47px] mx-auto"
                          >
                            <span className="font-Poppins text-black font-semibold mx-aut0 md:text-[10px] sm:text-[10px]">
                              Submit
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
