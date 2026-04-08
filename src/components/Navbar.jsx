import React from "react";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-full bg-[#17191CFF]">
      <div className="bg-[#17191CFF] w-full h-[64px] flex justify-between">
        <div className="text-white p-[10px] font-bold text-[30px] ml-[20px]">
          <Link to={"/app"}>
            Talk<span className="text-[#34D4F4]">Nest</span>
          </Link>
        </div>
        <div className="p-3 mr-[50px] flex gap-5">
          <input
            type="text"
            placeholder="Search"
            className="p-[8px] w-[200px] placeholder:text-white border border-[#5A5F68FF] rounded-md text-white"
          />
          <MessageSquare className="text-white mt-[6px]" />
          <img
            src={logo}
            alt=""
            className="border border-white rounded-[50%] h-[36px] w-[36px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
