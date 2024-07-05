import React from "react";

import ChatItem from "./ChatItem";

const ChatList = (props) => {
  const chats = props.chats;
  const navTouch = props.navTouch;
  const navHandler = props.navHandler;

  if (chats && chats.length > 0) {
    return (
      <div className="lg:h-full lg:w-1/6 lg: bg-gray-100 lg:flex-col lg:flex-grow lg:max-h-screen lg:overflow-y-auto lg:block max-h-screen overflow-y-auto">
        <nav className="bg-white border-slate-400 dark:bg-gray-900 lg:hidden">
          <div className=" flex flex-wrap items-center justify-between mx-auto p-1">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={navHandler}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {navTouch === 1 && (
              <div className="w-full h-full">
                <h1 className="mb-4 font-bold text-slate-400 text-center shadow-sm rounded-sm text-lg w-full">
                  Your Chats
                </h1>
                {chats.map((chat) => {
                  return <ChatItem chat={chat} clearChat={props.clearChat} />;
                })}
              </div>
            )}
          </div>
        </nav>
        <div className="hidden lg:block">
          <h1 className="mb-4 font-bold text-slate-400 text-center shadow-sm rounded-sm text-lg">
            Your Chats
          </h1>
          {chats.map((chat) => {
            return <ChatItem chat={chat} clearChat={props.clearChat} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="lg:h-full lg:w-1/6 lg:bg-gray-100 lg:block h-0">
      <nav className="bg-white border-slate-400 dark:bg-gray-900 lg:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={navHandler}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {navTouch === 1 && (
            <div
              className="lg:hidden block w-full h-screen insets-0 md:block md:w-auto"
              id="navbar-default"
            >
              <h1 className="font-bold text-slate-400 text-center shadow-sm rounded-sm lg:text-lg lg:block">
                No chats here, try chatting...
              </h1>
            </div>
          )}
        </div>
      </nav>
      <h1 className="font-bold text-slate-400 text-center shadow-sm rounded-sm lg:text-lg hidden lg:block">
        No chats here, try chatting...
      </h1>
    </div>
  );
};

export default ChatList;
