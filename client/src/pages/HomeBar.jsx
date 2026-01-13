import React from "react";
import { Link } from "react-router-dom";

const HomeBar = () => {
  return (
    <div className="h-screen rounded-2xl bg-[rgb(2,6,23)] w-[75%] p-2 mx-2 my-0.3 border-4 border-[#1E293B] grid grid-cols-4 grid-rows-2 gap-2">
      <div className="bg-[#020617] border-2 border-gray-700 h-[90%] rounded-2xl col-span-4   overflow-hidden">
        <img className="object-cover h-full w-full" src="./src/assets/bg.png" />
      </div>
      <div className="h-full bg-[#020617] border-2 border-gray-700 p-3 rounded-2xl col-span-2">
        <h2 className="text-white text-4xl">Students Records</h2>
        <p className="text-gray-400 text-xl">
          View and manage student information
        </p>
        <div className="flex justify-center items-center h-[70%]">
          <Link to={"/stdrecords"}>
            <button
              className="
            py-3 rounded-xl
            backdrop-blur-md bg-white/10
            border border-white/20
           text-cyan-300 font-medium
           hover:bg-white/20 hover:border-cyan-400
            transition-all duration-300 w-full cursor-pointer px-50
"
            >
              View Records
            </button>
          </Link>
        </div>
      </div>
      <div className="h-full bg-[#020617] border-2 border-gray-700 p-3 rounded-2xl col-span-2">
        <h2 className="text-white text-4xl">Add Records</h2>
        <p className="text-gray-400 text-xl">
          Add student records to the system
        </p>
        <div className="flex justify-center items-center h-[70%]">
          <Link to={"/addrecords"}>
            <button
              className="
            py-3 rounded-xl
            backdrop-blur-md bg-white/10
            border border-white/20
           text-cyan-300 font-medium
           hover:bg-white/20 hover:border-cyan-400
            transition-all duration-300 w-full cursor-pointer px-50
"
            >
              Add Records
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBar;
