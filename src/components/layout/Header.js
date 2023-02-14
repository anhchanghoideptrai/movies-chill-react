import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-4 mb-5">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          Movie
        </NavLink>
        <NavLink
          to="/tvseries"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          TV Series
        </NavLink>
      </header>
    </>
  );
};

export default Header;
