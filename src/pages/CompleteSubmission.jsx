import React from "react";
import { MailCheck } from "lucide-react";
import { RefreshCw } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CompleteSubmission = () => {
  const handleResend = () => {
    toast.success("Recovery link sent again to your email!",{theme: "dark"});
  };

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center flex-col">
      <div className="bg-[#1AE4FFFF] w-[100px] h-[100px] rounded-[9999px] flex justify-center items-center">
        <MailCheck size={40} />
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <h2 className="text-white text-[40px] font-bold mt-[15px]">
          Check Your Email
        </h2>
        <p className="text-white text-center">
          We've sent a password recovery link to your <br /> registered email
          address. Please follow the <br /> instructions to reset your password.
        </p>
      </div>
      <div className="border-[#33333380] border w-[400px] p-[12px] mt-[15px] bg-[#3838384D] rounded-md">
        <p className="text-[14px] text-center text-[#CCCCCCFF]">
          Can't find the email? Check your spam or junk folder.
        </p>
      </div>
      <div>
        <Link className="w-[400px] bg-[#34D4F4] p-3 rounded-md mx-auto block mt-5 cursor-pointer text-center" to={"/login"}>
          Return to Login
        </Link>
      </div>
      <div className="flex gap-2 mt-[10px]">
        <div className="mt-[13px]">
          <RefreshCw size={20} className="text-white" />
        </div>
        <p className="text-[#CCCCCCFF] text-center mt-[10px] flex gap-1">
          Didn't receive the email?
          <button
            onClick={handleResend}
            className="text-[#34D4F4] cursor-pointer"
          >
            Resend link
          </button>
          <ToastContainer position="top-right" autoClose={3000} />
        </p>
      </div>
      <Link
        to={"/login"}
        className="text-white flex gap-2 p-[12px] justify-center rounded-md w-[200px] mt-[10px] cursor-pointer"
      >
        <ArrowLeft size={20} className="mt-[3px]" />
        Back to Home
      </Link>
      <footer>
        <p>© 2026 MERN Chat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CompleteSubmission;
