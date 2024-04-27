import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import initialColors from "./initialColors";
import Color from './Color';
import ColorForm from "./ColorForm";
import Home from "./Home";

function App() {
  const INITIAL_STATE = initialColors;
  const [colors, setColors] = useState(INITIAL_STATE)
  console.log(colors);
  const addColor = color => {
    setColors(colors => [color, ...colors]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors/new" element={<ColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<Color colors={colors} />} />
        <Route path="/colors" element={<Home colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
