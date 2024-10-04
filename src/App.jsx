import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./User/login";
import Signup from "./User/signup";
import Notes from "./Notes/notes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
