import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import HomePage from "./pages/Homepage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:pokemon" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
