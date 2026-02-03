import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [rollno, setRollno] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const res = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ rollno, password })
    });

    const data = await res.json();
    alert(data.msg);

    if (data.msg === "Login success") {
      navigate("/chat");
    }
  };

  return (
    <>
      <div className="topbar">AI Student Assistant</div>

      <button className="back-btn" onClick={()=>navigate(-1)}>←</button>

      <div className="landing">
        <div className="form-card">
          <h2>Login</h2>
          <input placeholder="Roll Number" onChange={e=>setRollno(e.target.value)} />
          <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
          <button onClick={login}>Login</button>
        </div>
      </div>
    </>
  );
}
