import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const msgRef = useRef();
  const chatBoxRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (text, type) => {
    setMessages(prev => [...prev, { text, type }]);
  };

  const send = async () => {
    const text = msgRef.current.value.trim();
    if (!text) return;

    msgRef.current.value = "";
    addMessage(text, "user");

    const res = await fetch("https://personal-ai-assistent-backend-1.onrender.com/chat", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();
    addMessage(data.reply, "bot");
  };

  return (
    <>
      <div className="topbar">
        AI Student Assistant
        <button className="logout-btn" onClick={()=>navigate("/")}>
          Logout
        </button>
      </div>

      <div className="chat-screen">
        <div className="chat-box" ref={chatBoxRef}>
          {messages.map((m,i)=>(
            <div key={i} className={`message ${m.type}`}>{m.text}</div>
          ))}
        </div>

        <div className="chat-input">
          <input ref={msgRef} placeholder="Type message..." />
          <button onClick={send}>Send</button>
        </div>
      </div>
    </>
  );
}

