/** @format */

import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";

import mvdb from "../../assets/mvdb.svg";
import { useNavigate } from "react-router-dom";

// https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>
const Banner = () => {
  const { data } = useSWR(tmdbAPI.getMovieList("upcoming"), fetcher);
  const movies = data?.results || [];
  return (
    <section className="banner h-[670px] mb-[70px] overflow-hidden top-0">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, backdrop_path, id, overview, vote_average, vote_count } = item;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full select-none">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.5)]"></div>
      <img
        src={tmdbAPI.imageOriginal(backdrop_path)}
        alt=""
        className="object-cover object-top w-full h-full"
      />
      <div className="absolute top-[180px] w-full max-w-[500px] text-white left-[98px]">
        <div className="flex flex-col justify-start gap-4">
          <h2 className="text-5xl font-bold">{title}</h2>
          <div className="flex items-center justify-start gap-x-8">
            <div className="flex items-center justify-center gap-x-3">
              <img src={mvdb} alt="mvdb" />
              <span className="text-xs font-normal">{vote_average}</span>
            </div>
            <div className="flex items-center justify-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span className="text-xs font-normal">{vote_count}</span>
            </div>
          </div>
          <p className="text-lg font-medium mr-[102px] line-clamp">
            {overview}
          </p>
          <button
            className="flex items-center px-6 py-3 mr-auto text-2xl font-bold text-white uppercase rounded-md ju gap-x-2 bg-primary"
            onClick={() => navigate(`/movie/${id}`)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                fill="white"
              />
            </svg>
            Watch trailer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
