import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageGallery from "./product/ImageGallery";
import ImageDetails from "./product/ImageDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageGallery />} />
        <Route path="/image/:id" element={<ImageDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
