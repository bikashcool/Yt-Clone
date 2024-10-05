import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // Api Polling
    }, 1500);

    dispatch(
      addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(20),
      })
    );
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black rounded-md bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // indexes as key is not a good practice
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <div>
        <form
          className="w-full p-2 m-2 border border-black"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Bikash Kumar",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            type="text"
            className="w-96 px-2"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="px-2 mx-2 bg-green-100">
            Send
            <i class="fa-solid fa-rocket"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
