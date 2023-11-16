"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faEnvelope,
  faPhone,
  faHouse,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

const ParentForm = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="my-8">
      <div className="flex space-x-8">
        <div className="flex w-full form-control space-y-3">
          <div className="flex w-full space-x-3">
            <div className={`relative ${isFocused ? "focus" : ""}`}>
              <FontAwesomeIcon
                icon={faPerson}
                className="absolute mt-3 ml-3 w-6 h-6 text-gray-400"
              />
              <input
                type="text"
                placeholder="Parent's First Name"
                className="input input-bordered border-3 rounded-full border-white w-full pl-9 bg-white"
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
                className="input input-bordered border-3 rounded-full border-white w-full pl-9 bg-white"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="flex w-full space-x-3">
            <div className={`relative ${isFocused ? "focus" : ""}`}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute mt-3.5 ml-3 w-5 h-5 text-gray-400"
              />
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered border-3 rounded-full border-white w-full pl-9 bg-white"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className={`relative ${isFocused ? "focus" : ""}`}>
              <FontAwesomeIcon
                icon={faPhone}
                className="absolute mt-3.5 ml-3 w-5 h-5 text-gray-400"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered border-3 rounded-full border-white w-full pl-9 bg-white"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="flex w-full space-x-3">
            <div className={`relative ${isFocused ? "focus" : ""}`}>
              <FontAwesomeIcon
                icon={faHouse}
                className="absolute mt-3.5 ml-3 w-5 h-5 text-gray-400"
              />
              <input
                type="text"
                placeholder="Postcode"
                className="input input-bordered border-3 rounded-full border-white w-full pl-9 bg-white"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className={`relative ${isFocused ? "focus" : ""}`}>
              <FontAwesomeIcon
                icon={faSchool}
                className="absolute mt-3.5 ml-3 w-5 h-5 text-gray-400"
              />
              <select
                className="select select-bordered border-3 rounded-full border-white w-full max-w-[275px] pl-9 bg-white text-gray-400"
                defaultValue="">
                <option disabled value="">
                  Select Tutoring Type
                </option>
                <option className="text-black" value="In-person">
                  In-person
                </option>
                <option className="text-black" value="Online">
                  Online
                </option>
                <option className="text-black" value="Mixture">
                  Mixture of in-person and online
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full h-full block space-y-3">
          <div className={`${isFocused ? "focus" : ""}`}>
            <textarea
              placeholder="Let us know about the educational needs of your child (Optional) :)"
              className="textarea textarea-bordered border-3 rounded-[1.5rem] border-white w-full h-28 bg-white resize-none"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex relative justify-end">
            <button className="btn btn-info rounded-full">Submit Form!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentForm;
