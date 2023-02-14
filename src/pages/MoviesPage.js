import React, { useEffect, useState } from "react";
import InfoRight from "../components/layout/InfoRight";
import Sidebar from "../components/layout/Sidebar";
import useSWR from "swr";
import { fetcher } from "../config";
import Header from "../components/layout/Header";
import Movicard from "../components/movie/Movicard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;
const MoviesPage = () => {
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  // Invoke when user click to request another page.

  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=24f7854574fa538da14d2e2c0b54cd88&page=${nextPage}`
  );
  const filterDebounce = useDebounce(filter, 1000);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=24f7854574fa538da14d2e2c0b54cd88&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=24f7854574fa538da14d2e2c0b54cd88&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);
  const movies = data?.results || [];
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  // const { page, total_result } = data;
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <>
      <div className="container flex">
        <Sidebar></Sidebar>
        <div className="ml-[17%] content w-[65%] bg-primary text-slate-300 py-6 rounded-xl mb-10 mt-6">
          <Header></Header>
          <div className="py-10 page-container">
            <div className="flex">
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full p-4 bg-green-900 outline-none"
                  placeholder="Search here..."
                  onChange={handleFilterChange}
                />
              </div>
              <button className="p-4 bg-yellow-400 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
            {loading && (
              <div className="w-10 h-10 rounded-full border-4 border-yellow-400 border-t-transparent border-t-4 mx-auto animate-spin"></div>
            )}
            <div className="grid grid-cols-4 gap-6 mt-4">
              {!loading &&
                movies.length > 0 && //neu k co loading va co data moi do du lieu ra
                movies.map((item) => (
                  <Movicard key={item.id} item={item}></Movicard>
                ))}
            </div>
            <div className="mt-10">
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                className="pagination"
              />
            </div>
          </div>
        </div>
        <InfoRight></InfoRight>
      </div>
    </>
  );
};

export default MoviesPage;
