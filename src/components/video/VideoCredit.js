/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const VideoCredit = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "credits"), fetcher);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="cast-list">
      <h2 className="mb-10 text-5xl text-center">Cast</h2>
      <Swiper
        grabCursor={"true"}
        spaceBetween={40}
        slidesPerView={"auto"}
        navigation={true}
        modules={[Navigation]}
      >
        {cast.map((item) => (
          <SwiperSlide key={item.id}>
            <VideoCreditItem item={item}></VideoCreditItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

function VideoCreditItem({ item }) {
  const { profile_path, name } = item;
  return (
    <div className="flex flex-col items-center gap-7">
      <img
        src={profile_path === null ? "" : tmdbAPI.imageOriginal(profile_path)}
        alt=""
        className="object-cover w-[200px] h-[200px] mb-3 rounded-full"
      />
      <h3 className="text-xl font-medium">{name}</h3>
    </div>
  );
}

export default VideoCredit;
