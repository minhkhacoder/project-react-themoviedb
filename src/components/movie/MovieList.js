/** @format */

import React from "react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { tmdbAPI, fetcher } from "../../config";
import { Navigation } from "swiper";

const MovieList = ({ type = "popular" }) => {
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const movies = data?.results || [];
  return (
    <div className="movies-list">
      <>
        <Swiper
          grabCursor={"true"}
          spaceBetween={40}
          slidesPerView={"auto"}
          navigation={true}
          modules={[Navigation]}
        >
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </>
    </div>
  );
};

export default MovieList;
