import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center flex-col">
      <div className="text-center">
        <h1 className="text-white text-[40px] font-bold">
          Forgot <span className="text-[#34D4F4]">Password??</span>
        </h1>
        <p className="text-white">
          Enter your email address and we'll send you a secure <br />
          link to reset your account password.
        </p>
      </div>
      <div className="flex flex-col mt-[15px] gap-2">
        <label htmlFor="" className="text-white">
          Email Address
        </label>
        <input
          type="text"
          className="text-white p-[12px] w-[370px] border-[#5A5F68] rounded-md border-1 placeholder:text-gray-600 focus:outline-none focus:border-[#34D4F4]"
          placeholder="✉ Enter your Email"
        />
        <Link to={"/reset-success"}
          className="p-[10px] bg-[#34D4F4] rounded-md mt-[10px] text-center "
        >
          Send Resest Link
        </Link>
        <button
          to={"/login"}
          className="text-white flex gap-2 p-[12px] justify-center rounded-md w-[200px] ml-[85px] mt-[10px]"
        >
          <ArrowLeft size={20} className="mt-[3px]" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
