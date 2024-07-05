import React, { useState } from "react";

import ContentCard from "./ContentCard";
import LoadingSpinner from "./LoadingSpinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import client from "./gradio-client";

const type_to_num = {
  short: 250,
  medium: 500,
  long: 1000,
};

const GENERIC_CONTENT = [
  "All are equal ...",
  "Ladies and gentleman ...",
  "The need of the hour is ...",
  "We all know that to improve the economy ...",
];

const Hero = (props) => {
  const [prompt, setPrompt] = useState("");
  const [type, setType] = useState("short");
  const [isLoading, setIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [responseText, setResponseText] = useState("");

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const closeResponse = () => {
    setShowResponse(false);
    // setPrompt(" Type your starting sequence here");
  };

  const saveResponse = () => {
    setShowResponse(false);
    // save chat
    const data = {
      prompt: prompt,
      type: type,
      response: responseText,
    };
    props.setChats(data);
    // setPrompt(" Type your starting sequence here");
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!prompt || prompt.length === 0) {
      alert("PLEASE ENTER SOME NON-EMPTY PROMPT!!");
    }
    try {
      setIsLoading(true);
      const result = await client.predict("/chat", {
        message: prompt,
        min_length: 50,
        max_length: type_to_num[type],
      });
      setIsLoading(false);
      setResponseText(result.data);
      setShowResponse(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showResponse}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Model Response
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{responseText}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeResponse}>Close</Button>
          <Button onClick={saveResponse}>Save Chat</Button>
        </Modal.Footer>
      </Modal>

      <div className="lg:h-full lg:w-5/6 lg: bg-gray-50 lg:flex-col h-full w-full ">
        <div className="w-full mt-4 mb-24 flex gap-3 justify-center">
          <h1 className="text-slate-400 font-semibold text-2xl text-center">
            President GPT
          </h1>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="28.000000pt"
              height="28.000000pt"
              viewBox="0 0 16.000000 16.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path d="M26 129 c-14 -11 -26 -29 -26 -39 0 -27 36 -57 73 -62 18 -3 41 -9 51 -13 16 -7 18 -5 13 9 -4 10 -1 24 8 32 22 23 18 50 -11 73 -34 27 -74 27 -108 0z m84 -14 c26 -32 -13 -81 -47 -59 -10 6 -19 19 -21 28 -8 38 43 61 68 31z" />
                <path d="M67 104 c-14 -15 -6 -34 14 -34 14 0 19 5 17 17 -3 18 -20 27 -31 17z" />
              </g>
            </svg>
          </div>
        </div>
        <h3 className="text-slate-300 text-center mb-4 text-md font-mono">
          Sample Prompts
        </h3>
        <div className="lg:flex lg:mt-20 lg:!gap-10 lg:justify-center grid grid-rows-2 grid-cols-2 gap-x-2 gap-y-4 ml-2">
          {GENERIC_CONTENT.map((idea) => {
            return <ContentCard content={idea} />;
          })}
        </div>
        <div className="lg:mt-64 lg:ml-40 mt-52 ml-2">
          <form>
            <div className="flex lg:gap-8 gap-4">
              <textarea
                id="prompt"
                rows=""
                cols="60"
                className="resize-none rounded-lg bg-slate-200 active:bg-slate-300 lg:h-10 lg:p-1 lg:text-xl font-mono shadow-md hover:shadow-none text-base"
                placeholder=" Type your starting sequence here"
                value={prompt}
                onChange={handlePrompt}
              ></textarea>
              <select
                name="Types"
                id="type"
                className="font-mono text-center rounded-3xl bg-slate-300 hover:shadow:xl"
                value={type}
                onChange={handleType}
              >
                <option value="short">short</option>
                <option value="medium">medium</option>
                <option value="long">long</option>
              </select>
              <button
                type="submit"
                className=" font-mono bg-slate-300 shadow-sm p-2 rounded-2xl hover:shadow-xl hover:bg-slate-400"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* <iframe
          title="chatbot"
          src="https://adarksky-summer24-fine-tuning.hf.space"
          frameborder="0"
          width="850"
          height="450"
        ></iframe> */}
      </div>
    </>
  );
};

export default Hero;
