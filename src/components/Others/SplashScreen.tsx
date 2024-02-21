const SplashScreen = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[calc(100vh-220px)]">
      <img className="z-10" src="/favicon.ico" alt="logo" />
      <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
        <div className="w-32 h-32 bg-custom-violet-20 rounded-full animate-ping flex justify-center items-center delay-[500]">
          <div className="w-24 h-24 z-10 bg-custom-violet-30 rounded-full top-10 left-10  animate-ping flex justify-center items-center">
            <div className="w-12 h-12 z-20 bg-custom-violet-40 rounded-full top-10 left-10  animate-pulse flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
