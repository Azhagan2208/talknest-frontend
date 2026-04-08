import React, { useState } from "react";
import { Camera, ChevronUp, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import Footer from "../components/Footer";
import API from "../utils/axios";

const Register = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");

  const validationSchema = Yup.object({
    username: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid email").required("Email is required!!"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      tagline: "",
      email: "",
      password: "",
      profilePic: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await API.post("/auth/register", values);
      navigate("/login");
    },
  });
  const handleImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "talknest");
    data.append("cloud_name", "debqtq3uj");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/debqtq3uj/image/upload",
        {
          method: "POST",
          body: data,
        },
      );
      const new_res = await res.json();

      formik.setFieldValue("profilePic", new_res.secure_url);
      setPreview(new_res.secure_url);
    } catch (error) {
      console.log(error);
    }
  };

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
          onSubmit={formik.handleSubmit}
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

          <label htmlFor="fileInput" className="cursor-pointer">
            {preview ? (
              <img
                src={preview}
                className="w-20 h-20 rounded-full object-cover mt-3 text-center"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-white">
                No Image
              </div>
            )}
          </label>
          <input
            type="file"
            onChange={handleImage}
            id="fileInput"
            className="hidden"
            accept="image/*"
          />
          <div className="flex flex-col gap-2 mt-4 text-white/70 text-md">
            <div className="flex flex-col gap-2">
              <label className="text-[14px]">User Name</label>
              <input
                type="text"
                name="username"
                id="username"
                value={formik.values.username}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="w-[384px] p-2.5 rounded-md border border-[#5A5F68] bg-transparent text-white placeholder:text-gray-600 focus:outline-none focus:border-[#34D4F4] transition-colors"
                placeholder="Ex. John Doe"
              />
              {formik.touched.username && formik.errors.username && (
                <span className="text-red-500 text-md">
                  {formik.errors.username}
                </span>
              )}
            </div>
            </div>

            <div className="flex flex-col gap-2 mt-4 text-white/70 text-md">
            <div className="flex flex-col gap-2">
              <label className="text-[14px]">Tagline</label>
              <input
                type="text"
                name="tagline"
                id="tagline"
                value={formik.values.tagline}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="w-[384px] p-2.5 rounded-md border border-[#5A5F68] bg-transparent text-white placeholder:text-gray-600 focus:outline-none focus:border-[#34D4F4] transition-colors"
                placeholder="At meeting.."
              />
              {formik.touched.tagline && formik.errors.tagline && (
                <span className="text-red-500 text-md">
                  {formik.errors.tagline}
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

            <button
              type="submit"
              className="bg-[#34D4F4] text-black font-bold py-3 rounded-md mt-4 hover:bg-[#2bc2e0] transition-colors flex justify-center items-center gap-3 text-[16px]"
            >
              Create Account <ChevronRight />
            </button>
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
