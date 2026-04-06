import React from "react";
import { Link } from "react-router-dom";
import { chatList } from "../config/chat_list.js";
import Profile from "../assets/logo_1.png";
import { Settings } from "lucide-react";
import { LogOut } from "lucide-react";
import Setting from "../pages/Setting";

const Sidebar = () => {
  return (
    <div className="w-100 border-r border-gray-800 flex flex-col p-5">
      {/* Profile Section */}
      <div className="flex items-center gap-3 mb-10">
        <img src={Profile} className="w-10 h-10 rounded-full" alt="User" />
        <span className="font-bold">My Account</span>
      </div>

      <nav className="flex-1 flex flex-col gap-2 overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <p className="text-gray-500 text-sm mb-4">CHATS</p>

        {chatList.map((chat, index) => (
          <Link to={`/app/${chat.id}`} key={chat.id}>
            <div className="p-3 rounded-md cursor-pointer hover:bg-gray-800 transition flex gap-4">
              <img
                src={chat.Profile}
                alt=""
                className="w-[50px] h-[50px] border-white rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p>{chat.Name}</p>
                <p className="text-gray-500 text-sm">{chat.Message}</p>
              </div>
            </div>
          </Link>
        ))}
      </nav>
      <div className="p-[5px] ml-[10px] h-[100px]">
        <Link
          to="/settings"
          className="flex items-center gap-2 text-white p-2 hover:bg-gray-800 rounded-md transition mt-[10px]"
        >
          <Settings size={18} />
          <span>Settings</span>
        </Link>
        <Link
          to="/login"
          className="flex items-center gap-2 text-red-400 p-2 hover:bg-red-900/20 rounded-md transition"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
