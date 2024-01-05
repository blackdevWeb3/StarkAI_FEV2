const Header = () => {
  return (
    <div className="px-4 md:px-6 lg:px-14 xl:px-[calc((100vw-var(--max-width))/2)] fixed top-0 bg-darkBackground z-20 w-full">
      <div className="w-full flex justify-between items-center border-b border-white border-opacity-10 h-12 gap-5">
        <div className="">
          <img src="./favicon.ico" alt="logo" className="w-[58px] h-[18px]" />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Header;
