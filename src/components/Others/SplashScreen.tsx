const SplashScreen = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center z-[101]">
      <div className="p-8 rounded-[32px]" id="rotate-board">
        <img src="/favicon.ico" alt="image"></img>
      </div>
    </div>
  );
};

export default SplashScreen;
