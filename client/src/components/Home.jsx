import React from "react";
import Sidebar from "../pages/sidebar";
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
