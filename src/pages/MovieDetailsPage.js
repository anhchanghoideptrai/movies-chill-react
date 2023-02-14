import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Header from "../components/layout/Header";
import { apiKey, fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <>
      <div className="w-full text-slate-300 py-6 rounded-t-[12px] mt-6 bg-primary">
        <Header></Header>
      </div>
      <div className="w-full h-[500px] relative rounded-b-xl text-primary">
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-b-xl"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat rounded-b-lg"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
          }}
        ></div>
        <div className="w-full h-[350px] absolute -bottom-[200px]">
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt=""
            className="w-[700px] h-[300px] rounded-lg mx-auto"
          />
        </div>
        <h1 className="font-bold text-4xl text-primary mt-44 text-center">
          {title}
        </h1>
        {genres.length > 0 && (
          <div className="flex justify-center gap-x-5 mb-10">
            {genres.map((item) => (
              <span
                className="py-2 px-4 mt-4 rounded-lg border border-primary text-primary"
                key={item.id}
              >
                {item.name}
              </span>
            ))}
          </div>
        )}
        <p className="text-sm text-center text-primary leading-relaxed max-w-[600px] mx-auto pb-8">
          {overview}
        </p>
        <MovieCredits></MovieCredits>
        <VideoTrailer></VideoTrailer>
      </div>
    </>
  );
};

function MovieCredits() {
  //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <>
      <h2 className="text-center text-3xl mb-4 text-primary font-semibold">
        Casts
      </h2>
      <div className="grid grid-cols-4 gap-x-5 text-primary">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg"
            />
            <h3 className="text-xl text-center mt-4 font-medium text-primary">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}

function VideoTrailer() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  return (
    <>
      <p className="text-center text-3xl text-primary pt-12 mb-6 font-semibold">
        Video Trailer
      </p>
      <div className="pb-10 flex gap-x-6">
        {results.slice(0, 2).map((item) => (
          <div key={item.id} className="w-full aspect-video">
            <iframe
              width="864"
              height="486"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="Youtube Video Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-fill rounded-lg"
            ></iframe>
            <p className="text-center text-lg mt-3 text-white bg-secondary rounded-md">
              {item.name.substring(0, 36)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieDetailsPage;
