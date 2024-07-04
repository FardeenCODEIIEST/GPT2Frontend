import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ChatItem = (props) => {
  const [click, setClick] = useState(false);

  const showModal = () => {
    setClick(true);
  };

  const closeModal = () => {
    setClick(false);
  };

  const deleteChat = () => {
    const chat = props.chat;
    props.clearChat(chat);
    setClick(false);
  };

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={click}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Model Response
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.chat.response}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
          <Button onClick={deleteChat}>Clear Chat</Button>
        </Modal.Footer>
      </Modal>
      <div
        onClick={showModal}
        className=" bg-gray-200 mb-2 w-full h-16 rounded shadow-md overflow-hidden cursor-pointer hover:bg-gray-300 hover:shadow-lg"
      >
        <h1 className="text-gray-750 font-semibold text-lg font-mono">
          {props.chat.prompt}
        </h1>
        <h3 className="text-gray-900 text-base font-mono font-semibold">
          {props.chat.type}
        </h3>
      </div>
    </>
  );
};

export default ChatItem;
