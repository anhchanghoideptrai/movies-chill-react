import React from "react";
import "swiper/scss";
import Banner from "../components/banner/Banner";
import Header from "../components/layout/Header";
import InfoRight from "../components/layout/InfoRight";
import Sidebar from "../components/layout/Sidebar";
import MovieLayout from "../components/movie/MovieLayout";

const Home = () => {
  return (
    <>
      <div className="container flex">
        <Sidebar></Sidebar>
        <div className="ml-[17%] content w-[65%] bg-primary text-slate-300 py-6 rounded-xl mb-10 mt-6">
          <Header></Header>
          <Banner></Banner>
          <MovieLayout></MovieLayout>
        </div>
        <InfoRight></InfoRight>
      </div>
    </>
  );
};

export default Home;
