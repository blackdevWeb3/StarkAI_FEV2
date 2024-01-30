import { Link } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <div className="h-screen w-full bg-black p-8 pt-24">
      <div className="w-full h-full rounded-lg overflow-hidden">
        <div className="w-full flex flex-row h-full mx-auto min-w-[1200px] relative">
          <div className="w-2/5 h-full flex items-center justify-center">
            <div className="items-center justify-center flex flex-col w-full h-full pl-20">
              <span className="w-full h-[200px] text-white text-left font-semibold text-[30px] z-10">
                Turn your infinite imagination into reality <br></br>
                <span className="text-deepPink pr-2">AI digital canvas</span>
                for creative creators!
              </span>
              <span className="z-[5] mt-[-30px] pl-0 p-10 flex flex-col justify-center items-center gap-3 rounded-md">
                <Link to="/login" className="primary-button z-10">
                  Create an account
                </Link>
              </span>
            </div>
          </div>
          <div className="absolute w-[1100px] top-[-100px] right-0">
            <img src="./assets/characters/lion.jpg" alt="lion" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
