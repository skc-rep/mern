import React from "react";
import Sidebar from "../constant/Sidebar";
import HomeBar from "../pages/HomeBar";

const Home = () => {
  return (
    <div className="flex bg-[#0F172A]">
      <Sidebar />
      <HomeBar />
    </div>
  );
};

export default Home;
