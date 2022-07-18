/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import mvdb from "../../assets/mvdb.svg";
import { tmdbAPI } from "../../config";

const MovieCard = ({ item }) => {
  const { poster_path, release_date, title, vote_average, vote_count, id } =
    item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full rounded-lg select-none">
      <img
        src={tmdbAPI.imageOriginal(poster_path)}
        alt=""
        className="object-cover w-full h-[250px] mb-3 object-top"
      />
      <div className="flex flex-col flex-1 w-full gap-3 mb-3">
        <span className="mt-0 text-xs font-bold text-white">
          {release_date}
        </span>
        <h2 className="mb-auto text-lg font-bold text-white">{title}</h2>
        <div className="flex items-center justify-between">
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
        <span className="text-xs font-bold text-[#9CA3AF]">
          Action, Adventure, Horror
        </span>
      </div>
      <button
        className="w-full px-4 py-2 mt-auto text-white capitalize rounded-md gap-x-2 bg-primary"
        onClick={() => navigate(`/movie/${id}`)}
      >
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
