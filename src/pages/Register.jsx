import React, { useState } from "react";
import { Camera, ChevronUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import Footer from "../components/Footer";

const Register = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid email").required("Email is required!!"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
      .required("Confirmation is required!")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center font-sans">
      <div>
        <h1 className="text-white text-center mb-2 font-bold text-3xl">
          Welcome to Talk<span className="text-[#34D4F4]">Nest</span>
        </h1>
        <p className="text-white text-center mb-5 text-sm">
          Join the MERN Chat community. Secure, <br /> real-time messaging with{" "}
          <span className="text-[#34D4F4]">JWT authentication.</span>
        </p>

        <form
          action=""
          className="border border-[#2A2F3A] bg-[#191B1FFF] w-[448px] rounded-md shadow-lg flex flex-col items-center"
        >
          <div className="flex text-white justify-center p-3 gap-5 mt-3 w-full">
            <Link
              type="button"
              className="p-3 w-[188px] bg-[#1E2024FF] rounded-md cursor-pointer text-white hover:bg-[#25282c] transition-all text-center"
              to={"/login"}
            >
              Login
            </Link>
            <button
              type="button"
              className="p-3 w-[188px] rounded-md cursor-pointer bg-[#34D4F4] text-black font-semibold"
            >
              Register
            </button>
          </div>

          <div className="flex flex-col items-center mt-6">
            <input type="file" />
          </div>
          <div className="flex flex-col gap-2 mt-4 text-white/70 text-md">
            <div className="flex flex-col gap-2">
              <label className="text-[14px]">Full Name</label>
              <input
                type="password"
                name="name"
                id="name"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="w-[384px] p-2.5 rounded-md border border-[#5A5F68] bg-transparent text-white placeholder:text-gray-600 focus:outline-none focus:border-[#34D4F4] transition-colors"
                placeholder="Ex. John Doe"
              />
              {formik.touched.name && formik.errors.name && (
                <span className="text-red-500 text-md">
                  {formik.errors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px]">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="email@example.com"
                className="w-[384px] p-2.5 rounded-md border border-[#5A5F68] bg-transparent text-white placeholder:text-gray-600 focus:outline-none focus:border-[#34D4F4] transition-colors"
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-500 text-md">
                  {formik.errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px]">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                name="password"
                id="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="w-[384px] p-2.5 rounded-md border border-[#5A5F68] bg-transparent text-white placeholder:text-gray-600 focus:outline-none focus:border-[#34D4F4] transition-colors"
              />
              {formik.touched.password && formik.errors.password && (
                <span className="text-red-500 text-md">
                  {formik.errors.password}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px]">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                name="confirm_password"
                id="confirm_password"
                value={formik.values.confirm_password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="w-[384px] p-2.5 rounded-md border border-[#5A5F68] bg-transparent text-white placeholder:text-gray-600 focus:outline-none focus:border-[#34D4F4] transition-colors"
              />
              {formik.touched.confirm_password &&
                formik.errors.confirm_password && (
                  <span className="text-red-500 text-md">
                    {formik.errors.confirm_password}
                  </span>
                )}
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <label htmlFor="">
                I agree to the
                <span className="text-[#34D4F4] cursor-pointer ml-[2px]">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-[#34D4F4] cursor-pointer">
                  Terms of Service
                </span>
                .
              </label>
            </div>

            <Link
              className="bg-[#34D4F4] text-black font-bold py-3 rounded-md mt-4 hover:bg-[#2bc2e0] transition-colors flex justify-center items-center gap-3 text-[16px]"
              to={"/app"}
            >
              Create Account <ChevronRight />
            </Link>
            <p className="flex justify-center items-center gap-1 mb-[10px]">
              Already have an account?
              <Link className="text-[#34D4F4] cursor-pointer" to={"/login"}>
                Log in here
              </Link>
            </p>
          </div>
        </form>

        <footer className="text-center text-white mt-10">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Register;
