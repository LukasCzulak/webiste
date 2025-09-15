import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import { HomePage } from "./pages/HomePage";
import { DevLog } from "./pages/DevLog";
import { Game } from "./pages/Game";

function App() {

  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/devlog" element={<DevLog />} />
      <Route path="/game" element={<Game />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
