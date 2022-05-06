import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/Character";
import LikedCharacters from "./pages/LikedCharacters";
import Main from "./pages/Main";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/character/:id" element={<Character/>} />
      <Route path="/liked" element={<LikedCharacters/>} />
    </Routes>
  );
}

export default App;
