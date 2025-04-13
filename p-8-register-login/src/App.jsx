import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./full-form/Login";
import Register from "./full-form/Register";
import Home from "./full-form/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
