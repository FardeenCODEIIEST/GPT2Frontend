import React from "react";

import ChatItem from "./ChatItem";

const ChatList = (props) => {
  const chats = props.chats;

  if (chats && chats.length > 0) {
    return (
      <div className="h-full w-1/6 bg-gray-100 flex-col flex-grow max-h-screen overflow-y-auto">
        <h1 className="mb-4 font-bold text-slate-400 text-center shadow-sm rounded-sm text-lg">
          Your Chats
        </h1>
        {chats.map((chat) => {
          return <ChatItem chat={chat} clearChat={props.clearChat} />;
        })}
      </div>
    );
  }
  return (
    <div className="h-full w-1/6 bg-gray-100">
      <h1 className="font-bold text-slate-400 text-center shadow-sm rounded-sm text-lg">
        No chats here, try chatting...
      </h1>
    </div>
  );
};

export default ChatList;
