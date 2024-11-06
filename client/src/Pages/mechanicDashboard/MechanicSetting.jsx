import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { RiSettings4Line } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";

const MechanicSettings = () => {
  const navigate = useNavigate();

  const navigateDashboard = () => {
    navigate("/mdashboard");
  };

  return (
    <div  className="mac-img flex gap-10 p-5 py-10 flex-col min-h-screen h-full bg-gradient-to-b from-[#955DF7] to-[#4C7BF6]">
      <div className="flex items-center gap-3">
        <button
          onClick={navigateDashboard}
          className="flex items-center gap-1 text-white p-2 px-5 shadow bg-black/50 rounded-lg"
        >
          {" "}
          <IoIosArrowBack /> Back
        </button>
        <span className="text-3xl font-bold text-white lg:text-4xl uppercase">
          Settings
        </span>
      </div>

      <div className="flex items-center lg:flex-row flex-col w-full gap-3">
        <button className="flex flex-row items-center justify-center gap-2 bg-white hover:bg-white/40 p-3 rounded-lg text-black w-full">
          <RiSettings4Line  size={20}/>
          <span className="uppercase">change Password</span>
        </button>

        <button className="flex flex-row items-center justify-center gap-2 bg-white hover:bg-white/40 p-3 rounded-lg  text-black w-full">
          <MdAccountBalance size={20} />
          <span className="uppercase">Account</span>
        </button>
      </div>
    </div>
  );
};

export default MechanicSettings;
