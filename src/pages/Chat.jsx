import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessageSquare, CirclePlus } from "lucide-react";
import Sidebar from "../components/Sidebar";
import API from "../utils/axios.js";
import socket from "../socket.js";

const Chat = () => {
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("user"));
  // console.log(currentUser);

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

  const selectedUser = users.find((user) => user._id === id);

  useEffect(() => {
    if (!id) return;

    const fetchMessages = async () => {
      try {
        const res = await API.get(`/messages/${id}`);
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
  }, [id]);

  useEffect(() => {
    if (!currentUser) return;
    if (!socket.connected) {
      socket.connect();
    }
    socket.emit("join", currentUser._id);
  }, []);

  useEffect(() => {
    const handleMessage = (message) => {
      setMessages((prev) => [...prev, message]);
    };
    socket.off("receiveMessage");
    socket.on("receiveMessage", handleMessage);
    return () => {
      socket.off("receiveMessage", handleMessage);
    };
  }, []);

  const sendMessage = async () => {
    if (!text) return;

    try {
      const res = await API.post("/messages", {
        receiver: id,
        text,
      });

      setMessages((prev) => [...prev, res.data]);

      socket.emit("sendMessage", {
        receiver: id,
        message: res.data,
      });

      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <div className="flex items-center p-4 bg-gray-900 border-b border-gray-800">
          {selectedUser ? (
            <div className="flex items-center gap-3">
              <img
                src={selectedUser.profilePic}
                alt=""
                className="w-13 h-13 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-bold ml-2">
                  {selectedUser.username}
                </span>
                <span className="opacity-20 ml-2">{selectedUser.tagline}</span>
              </div>
            </div>
          ) : (
            <span className="font-bold text-xl">TalkNest</span>
          )}
        </div>

        {/* CHAT AREA */}
        <div className="flex-1 flex flex-col bg-[#0B0D11]">
          {selectedUser ? (
            <>
              {/* MESSAGES */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg._id}
                    className={`flex ${
                      msg.sender === currentUser?._id
                        ? "justify-end mr-6"
                        : "justify-start ml-6"
                    }`}
                  >
                    <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-4 py-3 rounded-2xl shadow-lg">
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* INPUT */}
              <div className="p-4 border-t border-gray-800">
                <div className="flex gap-2 items-center">
                  <CirclePlus className="text-[#34D4F4] cursor-pointer" />

                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-2 bg-gray-800 rounded-lg outline-none"
                  />

                  <button
                    onClick={sendMessage}
                    className="bg-[#34D4F4] text-black px-4 py-2 rounded-lg font-bold"
                  >
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="p-6 bg-gray-900 rounded-3xl mb-5">
                <MessageSquare size={50} className="text-[#34D4F4]" />
              </div>

              <h1 className="text-3xl font-bold mb-2">Welcome to TalkNest!</h1>

              <p className="text-gray-400 text-center max-w-sm">
                Select a friend from the sidebar to start chatting.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
