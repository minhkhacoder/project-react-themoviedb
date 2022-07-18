/** @format */

import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import ModalBase from "../modal/ModalBase";

const VideoTrailer = ({ values }) => {
  const { openModalBase, setOpenModalBase, movieId } = values;
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "videos"), fetcher);
  console.log("VideoTrailer ~ data", data);
  if (!data) return null;
  const { results } = data || [];
  return (
    <>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        {results.length > 0 &&
          results.splice(0, 1).map((item) => (
            <div
              className="relative w-full h-full mx-auto bg-white rounded-md shadow-[0_10px_20px_#BE123C]"
              key={item.id}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-10 h-10 bg-white rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000"
                strokeWidth="2"
                onClick={() => setOpenModalBase(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${item.key}`}
                title={item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </ModalBase>
    </>
  );
};

export default VideoTrailer;
