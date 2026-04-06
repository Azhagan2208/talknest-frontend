import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/logo_1.png";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#17191CFF] w-full min-h-screen flex justify-center items-center flex-col">
        <div className="h-[1124px] bg-[#17191CFF] w-[869px] mt-[20px]">
          <h1 className="text-[#F9FAFAFF] font-bold text-[30px] ml-[10px]">
            Profile & Settings
          </h1>
          <div className="border-1 border-[#353940FF] h-[340px] rounded-md w-[832px] m-auto mt-[15px]">
            <h1 className="text-[#F9FAFAFF] font-bold text-[30px] ml-[15px] mt-[10px]">
              Account Information
            </h1>
            {/* Profile img and Name Display */}
            <div className="flex gap-5 p-[20px]">
              <img
                src={logo}
                alt=""
                className="w-[80px] h-[80px] border-white border rounded-[50%]"
              />
              <div className="ml-[20px]">
                <p className="text-[#F9FAFAFF]">Kai Anderson</p>
                <p className="text-[#F9FAFAFF]">Online</p>
                <p className="text-[#34D4F4FF] cursor-pointer">Change Avatar</p>
              </div>
            </div>
            <div className="flex flex-col ml-[20px]">
              <label htmlFor="" className="text-white">
                Display Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-[8px] w-[800px] placeholder:text-gray-400 border border-[#5A5F68FF] rounded-md focus:outline-none focus:border-[#34D4F4] text-white"
                value={"Kai Anderson"}
              />
              <label htmlFor="" className="text-white mt-[10px]">
                Email
              </label>
              <input
                type="text"
                value={"kai.anderson@mernchat.com"}
                placeholder="Enter your email"
                className="p-[8px] w-[800px] border border-[#5A5F68FF] rounded-md focus:outline-none focus:border-[#34D4F4] text-white"
              />
            </div>
          </div>
          <div className="w-[832px] border border-[#5A5F68FF] h-[202px] m-auto mt-[30px] rounded-md">
            <h1 className="text-[#F9FAFAFF] font-bold text-[30px] ml-[15px] mt-[10px]">
              Security Settings
            </h1>
            <p className="ml-[10px] text-white mt-[15px]">
              Your account is secured using JWT (JSON Web Tokens) for
              authentication. Sessions are time-limited for enhanced security.
            </p>
            <button className="w-[147px] h-[40px] text-[#34D4F4FF] bg-[#17191CFF] border border-[#34D4F4FF] rounded-md ml-[10px] mt-[15px] hover:text-[#17191CFF] hover:bg-[#34D4F4FF]">
              Change Password
            </button>
          </div>
          <div className="w-[832px] h-[162px] border border-[#5A5F68FF] m-auto mt-[30px] rounded-md">
            <h1 className="text-[#F9FAFAFF] font-bold text-[30px] ml-[15px] mt-[10px]">
              Preferences
            </h1>
            <div className="flex flex-col gap-2 ml-[10px] mt-[20px] text-white">
              <p>Enable Notifications</p>
              <p>Enhanced Privacy Mode</p>
            </div>
            <div>{/* Toggle here */}</div>
          </div>
          <div className="w-[832px] border border-[#5A5F68FF] h-[150px] m-auto mt-[30px] rounded-md">
            <h1 className="text-[#F9FAFAFF] font-bold text-[30px] ml-[15px] mt-[10px]">
              Developer Info
            </h1>
            <p className="text-[#F9FAFAFF] ml-[10px] mt-[20px]">
              Built with MERN (MongoDB, Express.js, React, Node.js), powered by
              Socket.io for real-time messaging, and WebRTC for one-to-one voice
              calls.
            </p>
          </div>
          <div className="flex gap-3 mt-[20px] ml-[20px]">
            <Link
              to={"/login"}
              className="bg-[#1E2024FF] text-[#F9FAFAFF] p-[12px] h-[40px] w-[76px] flex justify-center items-center rounded-md"
            >
              Logout
            </Link>
            <button className="bg-[#E46767FF] text-[#FDF2F2FF] p-[12px] h-[40px] w-[140px] flex justify-center items-center rounded-md cursor-pointer">
              Delete Account
            </button>
          </div>
          <div className="mt-[30px] flex justify-center items-center">
            <p className="text-white">© 2026 MERN Chat. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
