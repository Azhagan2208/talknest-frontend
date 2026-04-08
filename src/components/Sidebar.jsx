import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Settings, LogOut } from "lucide-react";
import API from "../utils/axios.js";

const Sidebar = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users");
        console.log(res);
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
    navigate("/");
  };

  return (
    <div className="w-100 border-r border-gray-800 flex flex-col p-5">
      {/* Profile Section */}
      <div className="flex items-center gap-3 mb-10">
        <img src={users.profilePic} className="w-10 h-10 rounded-full" alt="User" />
        <span className="font-bold">My Account</span>
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
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p>{user.username}</p>
                <p className="opacity-30">{user.tagline}</p>
                <p className="text-gray-500 text-sm">{user.Message}</p>
              </div>
            </div>
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-[5px] ml-[10px] h-[100px]">
        <Link
          to="/settings"
          className="flex items-center gap-2 text-white p-2 hover:bg-gray-800 rounded-md transition mt-[10px]"
        >
          <Settings size={18} />
          <span>Settings</span>
        </Link>

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
