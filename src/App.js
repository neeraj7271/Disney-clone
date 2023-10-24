import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Detail from "./components/Detail";
// react router dom enables us to router/move between the pages with different urls
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="detail/*" element={<Detail />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
