import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";
import Chat from "./Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
