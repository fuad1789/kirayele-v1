import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Home from "./screens/Home";
import Details from "./screens/Details";
import New from "./screens/New";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="new" element={<New />} />
      </Routes>
      {screenWidth < 800 && <BottomBar />}
    </div>
  );
}

export default App;
