import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import TVShow from "./pages/TVShow";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/tvseries" element={<TVShow />} />
      </Routes>
    </>
  );
}

export default App;
