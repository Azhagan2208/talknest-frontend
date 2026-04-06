import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../components/Footer";

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center ">
      <div>
        <h1 className="text-white font-bold text-3xl text-center flex items-center gap-2 ml-[140px]">
          <MessageCircle className="text-white mt-[10px]" size={24} />
          Talk<span className="text-[#34D4F4]">Nest</span>
        </h1>
        <h1 className="text-white text-center mb-5 font-bold text-3xl mt-[20px]">
          Welcome Back!
        </h1>
        <p className="text-white text-center mb-5 text-sm">
          TalkNest: Secure, real-time messaging with JWT authentication.
        </p>
        <form className="border border-[#2A2F3A] bg-[#191B1FFF]  w-[448px] rounded-md shadow-lg p-[10px]">
          <div className="flex text-white justify-center p-3 gap-5 mt-3">
            <button className="p-3 w-[188px] bg-[#34D4F4] rounded-md cursor-pointer text-black">
              Login
            </button>

            <Link
              className="p-3  w-[188px] rounded-md cursor-pointer bg-[#1E2024FF] text-white text-center"
              to={"/register"}
            >
              Register
            </Link>
          </div>
          <div className="flex flex-col items-center gap-3 mt-2">
            <label className="text-white w-[384px] text-left">
              Email or Phone
            </label>
            <input
              type="text"
              className="w-[384px] p-2.5 rounded-md border border-[#5A5F68] bg-transparent text-white placeholder:text-gray-600 focus:outline-none focus:border-[#34D4F4] transition-colors"
              placeholder="john.doe@example.com"
              name="email"
              id="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-md">
                {formik.errors.email}
              </span>
            )}
            <label className="text-white w-[384px] text-left">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-[384px] p-2.5 rounded-md border border-[#5A5F68] bg-transparent text-white placeholder:text-gray-600 focus:outline-none focus:border-[#34D4F4] transition-colors"
              placeholder="••••••••"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-500 text-md">
                {formik.errors.password}
              </span>
            )}
            <div className="flex justify-between items-center w-[384px] mt-2">
              <div className="flex gap-2 items-center">
                <input type="checkbox" />
                <label className="text-white text-sm">Remember me</label>
              </div>
              <Link
                to={"/forgot-password"}
                className="text-[#34D4F4] underline cursor-pointer text-sm"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <Link
            className="w-[384px] bg-[#34D4F4] p-3 rounded-md mx-auto block mt-5 cursor-pointer text-center"
            to={"/app"}
          >
            Login
          </Link>
          <p className="flex justify-center items-center gap-1 text-white mt-2">
            New to TalkNest?
            <Link className="text-[#34D4F4] cursor-pointer" to={"/register"}>
              Create an account
            </Link>
          </p>
        </form>
        <div className="text-center text-white mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
