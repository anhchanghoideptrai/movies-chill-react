import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=24f7854574fa538da14d2e2c0b54cd88",
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  return (
    <section className="banner h-[400px] page-container mb-20 relative rounded-xl">
      <div className=" absolute inset-0">
        <Swiper
          modules={[Navigation]}
          navigation
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <BannerItem item={item}></BannerItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, backdrop_path } = item;
  return (
    <div className="h-full rounded-lg max-w-[1000px] relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to [rgba(0,0,0,0.9)] rounded-xl"></div>
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt=""
        className=" w-full h-full object-cover rounded-xl"
      />
      <div className=" ml-4 bottom-6 absolute">
        <h2 className=" font-bold text-3xl mb-6">{title}</h2>
        <div className="flex item-center gap-x-3 mb-6">
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Action
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Comedy
          </span>
        </div>
        <button className="py-3 px-6 rounded-lg bg-primary font-medium">
          ComingUp
        </button>
      </div>
    </div>
  );
}

export default Banner;
