/** @format */

import React from "react";

const MovieTrailer = () => {
  return (
    <div className="flex flex-col h-full gap-3">
      <iframe
        width="640"
        height="480"
        src="https://www.youtube.com/embed/JxBnLmCOEJ8"
        title="Đen - Ai muốn nghe không (M/V)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="w-full h-[250px] object-fill"
      ></iframe>
      <h2 className="text-lg text-[#111827] font-bold">
        Đen - Ai muốn nghe không (M/V)
      </h2>
    </div>
  );
};

export default MovieTrailer;
