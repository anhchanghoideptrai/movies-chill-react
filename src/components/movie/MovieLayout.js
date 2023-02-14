import React from "react";
import MovieList from "./MovieList";

const MovieLayout = () => {
  return (
    <>
      <section className="movie-layout page-container pl-3 pb-10">
        <h2 className=" capitalize font-bold text-2xl mb-6 text-white">
          Now Playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movie-layout page-container pl-3 pb-10">
        <h2 className=" capitalize font-bold text-2xl mb-6 text-white">
          Top Rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movie-layout page-container pl-3 pb-10">
        <h2 className=" capitalize font-bold text-2xl mb-6 text-white">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </>
  );
};

export default MovieLayout;
