import React, { useEffect, useState } from "react";
import bootstrap from 'bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import Home from "./Home";
import det from "./Home";

// json-server --watch db.json
// npm start

function App() {
  
  
  return (
    <div >
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Detail" element={<Details  />} />
      </Routes>
    </div>
  );
}

export default App;
