"use client";
import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-family: "Space Mono", monospace;
  font-style: italic;
`;

const FilmBox = () => {
  return (
    <div
      className="max-w-xl grid h-20 card bg-[#15191e] rounded-box place-items-center text-lg py-4 px-4"
      style={{ height: "6rem" }}>
      <StyledText>Film, Television & New Media</StyledText>
      <div className="rating rating-sm">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
    </div>
  );
};

export default FilmBox;
