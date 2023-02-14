import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import InfoRight from "../components/layout/InfoRight";
import TVShowCard from "../components/movie/TvShowcard";

const TVShow = () => {
  const [tvShow, setTvShow] = useState([]);
  const { data } = useSWR(
    "https://api.themoviedb.org/3/tv/popular?api_key=24f7854574fa538da14d2e2c0b54cd88",
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setTvShow(data.results);
  }, [data]);
  return (
    <>
      <div className="container flex">
        <Sidebar></Sidebar>
        <div className="ml-[17%] content w-[65%] bg-primary text-slate-300 py-6 rounded-xl mb-10 mt-6">
          <Header></Header>
          <div className="py-10">
            <div className="grid grid-cols-4 grid-rows-3 gap-6">
              {tvShow.length > 0 &&
                tvShow.map((item) => (
                  <TVShowCard key={item.id} item={item}></TVShowCard>
                ))}
            </div>
          </div>
        </div>
        <InfoRight></InfoRight>
      </div>
    </>
  );
};

export default TVShow;
