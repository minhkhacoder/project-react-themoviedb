/** @format */

import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <>
      <section className="mb-[80px] page-container">
        <div className="flex items-center justify-between mb-11">
          <h2 className="text-4xl font-bold text-white">Featured Movie</h2>
          <div className="flex items-center justify-center gap-x-2">
            <span className="text-lg font-normal text-primary">See more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#BE123C"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <MovieList></MovieList>
      </section>
      <section className="mb-[80px] page-container">
        <div className="flex items-center justify-between mb-11">
          <h2 className="text-4xl font-bold text-white">New Arrival</h2>
          <div className="flex items-center justify-center gap-x-2">
            <span className="text-lg font-normal text-primary">See more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#BE123C"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <MovieList type={"upcoming"}></MovieList>
      </section>
      <section className="mb-[80px] page-container">
        <div className="flex items-center justify-between mb-11">
          <h2 className="text-4xl font-bold text-white">Top Rated</h2>
          <div className="flex items-center justify-center gap-x-2">
            <span className="text-lg font-normal text-primary">See more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#BE123C"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <MovieList type={"top_rated"}></MovieList>
      </section>
    </>
  );
};

export default HomePage;
