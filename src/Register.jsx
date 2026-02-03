import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const register = async () => {
    const res = await fetch("https://personal-ai-assistent-backend-1.onrender.com/register", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.msg);

    if (data.msg === "Registered successfully") {
      navigate("/login");   // ✅ redirect to login
    }
  };

  return (
    <>
      <div className="topbar">AI Student Assistant</div>

      <button className="back-btn" onClick={()=>navigate(-1)}>←</button>

      <div className="landing">
        <div className="form-card">
          <h2>Register</h2>
          <input placeholder="Username"
            onChange={e=>setForm({...form, username:e.target.value})}/>
          <input placeholder="Roll Number"
            onChange={e=>setForm({...form, rollno:e.target.value})}/>
          <input type="password" placeholder="Password"
            onChange={e=>setForm({...form, password:e.target.value})}/>
          <button onClick={register}>Register</button>
        </div>
      </div>
    </>
  );
}

