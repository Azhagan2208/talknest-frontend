import React from "react";
import { Link, useParams } from "react-router-dom";
import { MessageSquare, LogOut } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { chatList } from "../config/chat_list.js";
import { CirclePlus } from "lucide-react";
import { Send } from "lucide-react";
import { PhoneCall } from "lucide-react";

const Chat = () => {
  const { id } = useParams();
  const selectedUser = chatList.find((user) => user.id === parseInt(id));

  return (
    <div className="flex h-screen bg-black text-white font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800">
          {selectedUser ? (
            <div className="flex items-center gap-3">
              <img
                src={selectedUser.Profile}
                alt={selectedUser.Name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-bold">{selectedUser.Name}</span>
              <button className="flex ml-250 gap-2 cursor-pointer fixed">
                <PhoneCall />
                Call
              </button>
            </div>
          ) : (
            <span className="font-bold text-xl">TalkNest</span>
          )}
        </div>

        {/* Chat Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-10 bg-[#0B0D11]">
          {selectedUser ? (
            <div className="w-full max-w-4xl h-full flex flex-col">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex justify-start">
                  <div className="bg-gray-800 p-3 rounded-lg max-w-xs">
                    <p>{selectedUser.Message}</p>
                  </div>
                </div>
              </div>
              {/* Message Input */}
              <div className="p-4 border-t border-gray-800">
                <div className="flex gap-2">
                  <button>
                    <CirclePlus
                      size={24}
                      className="text-[#34D4F4] cursor-pointer"
                    />
                  </button>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 p-2 bg-gray-800 rounded-lg text-white focus:outline-none"
                  />
                  <button className="cursor-pointer">
                    <Send size={20} className="text-[#34D4F4]" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="p-6 bg-gray-900 rounded-3xl mb-5 shadow-xl cursor-pointer">
                <MessageSquare size={50} className="text-[#34D4F4]" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Welcome to TalkNest!</h1>
              <p className="text-gray-400 text-center max-w-sm">
                Select a friend from the sidebar to start a conversation.
              </p>
              <button className="mt-8 px-6 py-2 bg-[#34D4F4] text-black font-bold rounded-lg hover:scale-105 transition">
                Start Messaging
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
