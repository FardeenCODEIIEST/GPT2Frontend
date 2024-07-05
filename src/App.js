import React, { useState } from "react";

import ChatList from "./components/ChatList";
import Hero from "./components/Hero";

let CHATS;

if (localStorage.getItem("chats") === null) {
  CHATS = [];
} else {
  CHATS = JSON.parse(localStorage.getItem("chats"));
}

const App = () => {
  const [chats, setChats] = useState(CHATS);
  const [navTouch, setNavTouch] = useState(0);

  const navHandler = () => {
    setNavTouch((navTouch + 1) % 2);
  };

  const pushChats = (chat) => {
    chats.push(chat);
    const newChats = chats.slice();
    setChats(newChats);
    let arrayString = JSON.stringify(newChats);
    localStorage.setItem("chats", arrayString);
  };

  const clearChat = (chat) => {
    const index = chats.indexOf(chat);
    const newChats = chats.slice();
    newChats.splice(index, 1);
    setChats(newChats);
    let arrayString = JSON.stringify(newChats);
    localStorage.setItem("chats", arrayString);
  };

  return (
    <div className="lg:flex h-screen w-screen ">
      <ChatList
        chats={chats}
        clearChat={clearChat}
        navHandler={navHandler}
        navTouch={navTouch}
      />
      {navTouch === 0 && <Hero chats={chats} setChats={pushChats} />}
    </div>
  );
};

export default App;
