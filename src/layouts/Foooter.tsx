const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full z-10 bg-dark-background max-md:border-t border-t-white border-opacity-[.15] mt-10">
      <div className="absolute w-[calc(100vw_-_var(--scrollbar-thickness))] bg-dark-background left-1/2 -translate-x-1/2 top-0 h-full z-[-1]"></div>
      <div className="px-4 pt-4 pb-5 md:border-t border-t-white border-opacity-[.15] max-w-[1176px] mx-auto">
        <form className="flex flex-col justify-center items-stretch gap-2 w-full max-w-xl mx-auto">
          <div className="relative flex items-end gap-2 bg-dark-elements rounded-[.625rem] py-2 pl-4 pr-2 min-h-[3rem]">
            <textarea
              name="promptText"
              placeholder="Describe your story"
              className="my-1 text-white font-Poppins outline-none w-full resize-none bg-[#1F1F1F] placeholder:text-[#A5A5A1] flex-1 text-prompt-mobile lg:text-prompt h-6 max-h-[4.5rem]"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
