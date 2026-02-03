<div className="topbar">AI Student Assistant</div>

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="topbar">AI Student Assistant</div>

      <div className="landing">
        <h1>How can I help you today?</h1>

        <div className="search-box" style={{justifyContent:"center"}}>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button style={{marginLeft:"10px"}}>Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}
