import { movies } from "./movieDummy";
import Movie from "./components/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Celebrity from "./components/pages/Celebrity";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
//import NotFound from "./components/pages/NotFound";
import TV from "./components/pages/TV";
import Header from "./components/Header";
import AdPage from "./components/AdPage";
import React, { useState } from "react";
function App() {
  return (
    <BrowserRouter>
      <div className="root-wrap">
        <Header />
        <AdPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Movies" element={<Movies />} />
          <Route path="/pages/Celebrity" element={<Celebrity />} />
          <Route path="/pages/TV" element={<TV />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
