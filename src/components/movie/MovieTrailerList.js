/** @format */

import React from "react";
import MovieTrailer from "./MovieTrailer";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { tmdbAPI, fetcher } from "../../config";
import { Navigation } from "swiper";

const MovieTrailerList = () => {
  return <div className="trailer-list"></div>;
};

export default MovieTrailerList;
