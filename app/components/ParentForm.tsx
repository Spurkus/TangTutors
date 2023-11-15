"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons/faPerson";

const ParentForm = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="flex relative form-control w-full max-w-xs my-8">
      <div className={`relative ${isFocused ? "focus" : ""}`}>
        <FontAwesomeIcon
          icon={faPerson}
          className="absolute mt-3 ml-3 w-6 h-6 text-gray-400"
        />
        <input
          type="text"
          placeholder="Parent's First Name"
          className="input input-bordered border-3 rounded-full border-white w-full max-w-xs pl-9 bg-white"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className={`relative ${isFocused ? "focus" : ""}`}>
        <FontAwesomeIcon
          icon={faPerson}
          className="absolute mt-3 ml-3 w-6 h-6 text-gray-400"
        />
        <input
          type="text"
          placeholder="Parent's Last Name"
          className="input input-bordered border-3 rounded-full border-white w-full max-w-xs pl-9 bg-white"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default ParentForm;
