import { Icon } from "@iconify/react";

const Footer = () => {
  const handleSubmitButton = () => {
    console.log("Happy Out");
  };
  return (
    <div className="fixed bottom-0 w-full z-10 bg-dark-background max-md:border-t border-t-white border-opacity-[.15] mt-10">
      <div className="absolute w-[calc(100vw_-_var(--scrollbar-thickness))] bg-dark-background left-1/2 -translate-x-1/2 top-0 h-full z-[-1]"></div>
      <div className="px-4 pt-4 pb-5 md:border-t border-t-white border-opacity-[.15] max-w-[1176px] mx-auto">
        <div className="flex flex-col justify-center items-stretch gap-2 w-full max-w-xl mx-auto">
          <form
            className="relative flex items-end gap-2 bg-dark-elements rounded-[.625rem] py-2 pl-4 pr-2 min-h-[3rem]"
            id="ai_images"
            name="ai_images"
            method="post"
          >
            <textarea
              name="promptText"
              placeholder="Describe your requirements"
              className="my-1 text-white font-Poppins outline-none w-full resize-none bg-[#1F1F1F] placeholder:text-[#A5A5A1] flex-1 text-prompt-mobile lg:text-prompt h-6 max-h-[4.5rem]"
            ></textarea>
            <button
              type="submit"
              name="submit"
              onClick={handleSubmitButton}
              className="rounded-md bg-[#d93f3f] font-extra-thick flex items-center justify-center transition-colors disabled:cursor-not-allowed px-1.5 gap-1.5 py-1.5 !text-light-tertiary hover:bg-accent-hover text-dark-background bg-accent-primary"
            >
              <Icon
                icon="solar:map-arrow-right-bold"
                className="text-[#FFEDD2] hover:text-[#FFDBA4]"
                width={24}
                height={24}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
