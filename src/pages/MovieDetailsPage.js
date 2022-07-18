/** @format */

import React, { useState } from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { fetcher, tmdbAPI } from "../config";
import imdb from "../assets/mvdb.svg";
import VideoCredit from "../components/video/VideoCredit";
import MovieSimilar from "../components/movie/MovieSimilar";
import VideoTrailer from "../components/video/VideoTrailer";

const MovieDetailsPage = () => {
  const [openModalBase, setOpenModalBase] = useState(false);
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);

  if (!data) return null;
  const { backdrop_path, poster_path, overview, title, vote_count } = data;
  const values = { openModalBase, setOpenModalBase, movieId };

  return (
    <>
      <div className="mt-[80px] w-full h-[670px] relative">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`,
          }}
        ></div>
        <div className="absolute w-full top-[40px] page-container">
          <div className="flex items-start justify-between gap-x-28">
            <div className="flex flex-col gap-8">
              <h2 className="text-5xl font-semibold font-textHeading">
                {title}
              </h2>
              <div className="flex flex-col gap-3">
                <svg
                  width="118"
                  height="22"
                  viewBox="0 0 118 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                    fill="#FF6B59"
                    stroke="#FF6B59"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 1L38.09 7.26L45 8.27L40 13.14L41.18 20.02L35 16.77L28.82 20.02L30 13.14L25 8.27L31.91 7.26L35 1Z"
                    fill="#FF6B59"
                    stroke="#FF6B59"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M59 1L62.09 7.26L69 8.27L64 13.14L65.18 20.02L59 16.77L52.82 20.02L54 13.14L49 8.27L55.91 7.26L59 1Z"
                    fill="#FF6B59"
                    stroke="#FF6B59"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M83 1L86.09 7.26L93 8.27L88 13.14L89.18 20.02L83 16.77L76.82 20.02L78 13.14L73 8.27L79.91 7.26L83 1Z"
                    fill="#FF6B59"
                    stroke="#FF6B59"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M107 1L110.09 7.26L117 8.27L112 13.14L113.18 20.02L107 16.77L100.82 20.02L102 13.14L97 8.27L103.91 7.26L107 1Z"
                    stroke="#FF6B59"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xl font-normal font-text">
                  {vote_count} votes
                </span>
                <div className="flex items-center justify-start">
                  <img src={imdb} alt="" className="w-[57px] h-[33px]" />
                  <svg
                    width="57"
                    height="33"
                    viewBox="0 0 57 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6"
                      y="3"
                      width="46"
                      height="26"
                      rx="3"
                      fill="#FF6B59"
                    />
                    <path
                      d="M23.1058 18.2013V12.6045L23.0345 12.5808L22.7969 13.0204L19.5173 18.2013H23.1058ZM26.2191 8.43373V18.2013H27.9777V20.6253H26.2191V24H23.1058V20.6253H16.7486L16.606 18.7479L23.0702 8.43373H26.2191ZM33.1467 17.5002V24H30.0215V8.43373H33.1467V14.7909H34.5132L38.6364 8.43373H42.4508L37.2105 15.6821L42.8667 24H39.0642L34.8815 17.5002H33.1467Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-normal leading-7 font-text line-clamp">
                {overview}
              </p>
              <button
                className="flex items-center justify-start px-4 py-3 mr-auto text-2xl font-semibold uppercase rounded-lg gap-x-3 bg-primary"
                onClick={() => {
                  setOpenModalBase(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch trailer
              </button>
            </div>
            <img
              src={`${tmdbAPI.imageOriginal(poster_path)}`}
              alt=""
              className="object-cover w-[300px] h-[400px] rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 mb-16 page-container">
        <div className="pb-20">
          <VideoCredit></VideoCredit>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-bold text-white">Similar Video</h2>
          <MovieSimilar type={"similar"}></MovieSimilar>
        </div>
      </div>
      <VideoTrailer values={values}></VideoTrailer>
    </>
  );
};

export default MovieDetailsPage;
