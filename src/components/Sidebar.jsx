import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Settings, LogOut } from "lucide-react";
import API from "../utils/axios.js";
import { toast, ToastContainer } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users");
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout Successful!", { theme: "dark" });
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  const currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="w-100 border-r border-gray-800 flex flex-col p-5">
      <ToastContainer position="top-right" autoClose={1500} />
      {/* Profile Section */}
      <div className="flex items-center gap-3 mb-10">
        <img
          src={currentUser?.profilePic}
          className="w-15 h-15 rounded-full object-cover"
          alt="User"
        />
        <span className="font-bold text-lg">{currentUser?.username}</span>
      </div>

      {/* Chat List */}
      <nav className="flex-1 flex flex-col gap-2 overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <p className="text-gray-500 text-sm mb-4">CHATS</p>

        {users.map((user) => (
          <Link to={`/app/${user._id}`} key={user._id}>
            <div className="p-3 rounded-md cursor-pointer hover:bg-gray-800 transition flex gap-4">
              <img
                src={user.profilePic}
                alt=""
                className="w-15 h-15 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p className="text-lg">{user.username}</p>
                <p className="opacity-30">{user.tagline}</p>
                <p className="text-gray-500 text-sm">{user.Message}</p>
              </div>
            </div>
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-[5px] ml-[10px] mb-2">
        <div
          onClick={logout}
          className="flex items-center gap-2 text-red-400 p-2 hover:bg-red-900/20 rounded-md transition cursor-pointer"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
