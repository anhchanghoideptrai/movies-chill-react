import React from "react";
import { useNavigate } from "react-router-dom";

const Movicard = ({ item }) => {
  const { vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card rounded-lg px-2 py-2 bg-green-900 text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[200px] rounded-lg object-cover"
      />
      <div className="flex justify-between items-center text-sm opacity-50 my-2">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <button
        onClick={() => navigate(`/movies/${id}`)}
        className="py-3 px-6 rounded-lg bg-yellow-400 text-white font-medium w-full"
      >
        Watch Now
      </button>
    </div>
  );
};

export default Movicard;
