"use client";

import React, { useRef, useState, useEffect, FormHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faEnvelope,
  faPhone,
  faHouse,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal";
import Seal from "public/seal.jpg";
import Image from "next/image";

const NAME_REGEX = /^[A-Za-z]{1,30}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONENUMBER_REGEX = /^\+?[1-9]\d{8}$/;
const PHONENUMBER_REGEX_2 = /^0\d{9}$/;
const POSTCODE_REGEX = /^\d{4}$/;
const INFORMATION_REGEX = /^.{1,500}$/;

const ParentForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [validFirstName, setValidFirstName] = useState<boolean>(false);

  const [lastName, setLastName] = useState<string>("");
  const [validLastName, setValidLastName] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [validEmail, setValidEmail] = useState<boolean>(false);

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [validPhoneNumber, setValidPhoneNumber] = useState<boolean>(false);

  const [postcode, setPostcode] = useState<string>("");
  const [validPostcode, setValidPostcode] = useState<boolean>(false);

  const [tutoringType, setTutoringType] = useState<string>("");
  const [validTutoringType, setValidTutoringType] = useState<boolean>(false);

  const [information, setInformation] = useState<string>("");
  const [validInformation, setValidInformation] = useState<boolean>(false);

  const [openModal, setOpenModel] = useState<boolean>(false);

  // Testing the validity of inputs
  useEffect(() => {
    setValidFirstName(NAME_REGEX.test(firstName));
  }, [firstName]);

  useEffect(() => {
    setValidLastName(NAME_REGEX.test(lastName));
  }, [lastName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPhoneNumber(
      PHONENUMBER_REGEX.test(phoneNumber) ||
        PHONENUMBER_REGEX_2.test(phoneNumber)
    );
  }, [phoneNumber]);

  useEffect(() => {
    setValidPostcode(POSTCODE_REGEX.test(postcode));
  }, [postcode]);

  useEffect(() => {
    setValidTutoringType(
      ["In-person", "Online", "Mix of in-person and online"].includes(
        tutoringType
      )
    );
  }, [tutoringType]);

  useEffect(() => {
    setValidInformation(INFORMATION_REGEX.test(information));
  }, [information]);

  const handleInformationChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    if (value.length > 500) {
      return;
    }

    setInformation(value);
  };

  const handleModalToggle = () => setOpenModel((prev) => !prev);

  const refreshPage = () => {
    window.location.reload();
  };

  const validToSubmit =
    validFirstName &&
    validLastName &&
    validEmail &&
    validPhoneNumber &&
    validPostcode &&
    validInformation &&
    validTutoringType;

  // Handling submission and email

  const sendEmail = async () => {
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        postcode: postcode,
        information: information,
        tutoringType: tutoringType,
      }),
    });
  };

  const handleSubmit = (e: any) => {
    if (validToSubmit) {
      sendEmail();
      handleModalToggle();
    }
  };

  return (
    <div>
      <form action={handleSubmit}>
        <div className="my-8">
          <div className="flex space-x-8">
            <div className="flex w-full form-control space-y-3">
              <div className="flex w-full space-x-3">
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faPerson}
                    className="absolute mt-3 ml-3 w-6 h-6 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Parent's First Name"
                    className={`input input-bordered border-3 rounded-full border-white w-full pl-9 ${
                      validFirstName || !firstName ? "bg-white" : "bg-red-200"
                    }`}
                    id="firstName"
                    autoComplete="off"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faPerson}
                    className="absolute mt-3 ml-3 w-6 h-6 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Parent's Last Name"
                    className={`input input-bordered border-3 rounded-full border-white w-full pl-9 ${
                      validLastName || !lastName ? "bg-white" : "bg-red-200"
                    }`}
                    id="lastName"
                    autoComplete="off"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required
                  />
                </div>
              </div>
              <div className="flex w-full space-x-3">
                <div className="w-1/2 relative">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute mt-3.5 ml-3 w-5 h-5 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className={`input input-bordered border-3 rounded-full w-full border-white pl-9 ${
                      validEmail || !email ? "bg-white" : "bg-red-200"
                    }`}
                    id="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="w-1/2 relative">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="absolute mt-3.5 ml-3 w-5 h-5 text-gray-400"
                  />
                  <span className="absolute text-gray-600 mt-3 ml-10">61+</span>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className={`input input-bordered border-3 rounded-full w-full border-white pl-[4.5rem] ${
                      validPhoneNumber || !phoneNumber
                        ? "bg-white"
                        : "bg-red-200"
                    }`}
                    id="phoneNumber"
                    autoComplete="off"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    required
                  />
                </div>
              </div>
              <div className="flex w-full space-x-3">
                <div className="w-1/2 relative">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="absolute mt-3.5 ml-3 w-5 h-5 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Postcode"
                    className={`input input-bordered border-3 rounded-full w-full border-white pl-9 ${
                      validPostcode || !postcode ? "bg-white" : "bg-red-200"
                    }`}
                    id="postcode"
                    autoComplete="off"
                    onChange={(e) => setPostcode(e.target.value)}
                    value={postcode}
                    required
                  />
                </div>
                <div className="w-1/2 relative">
                  <FontAwesomeIcon
                    icon={faSchool}
                    className="absolute mt-3.5 ml-3 w-5 h-5 text-gray-400"
                  />
                  <select
                    className={`select select-bordered border-3 rounded-full border-white w-full pl-9 bg-white ${
                      tutoringType ? "text-black" : "text-gray-400"
                    }`}
                    id="tutoringType"
                    autoComplete="off"
                    onChange={(e) => setTutoringType(e.target.value)}
                    value={tutoringType}
                    required>
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
                      Mix of in-person and online
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full h-full block space-y-3">
              <div>
                <div className="flex relative justify-end">
                  <span
                    className={`absolute text-xs mt-1 right-3.5 ${
                      information.length > 450
                        ? "text-red-400"
                        : "text-gray-400"
                    }`}>
                    {500 - information.length}
                  </span>
                </div>
                <textarea
                  placeholder="Let us know about the educational needs of your child :)"
                  className="textarea textarea-bordered border-3 rounded-[1.5rem] border-white w-full h-28 bg-white resize-none"
                  id="information"
                  autoComplete="off"
                  onChange={(e) => handleInformationChange(e)}
                  value={information}
                  required
                />
              </div>
              <div className="flex relative justify-end">
                <button
                  className="btn btn-info rounded-full ml-auto"
                  type="submit"
                  disabled={!validToSubmit}
                  style={{
                    color: validToSubmit ? "black" : "white",
                    background: validToSubmit ? "" : "lightblue",
                  }}>
                  Submit Form!
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Modal open={openModal}>
        <h1 className="font-bold text-lg">Submission Successful!</h1>
        <p className="py-4">
          Thank you for submitting the form! You will receive an email shortly
          with information about tutoring from Tang Tutors. <br />
          <br />
          Also, enjoy this cute picture of a seal!
        </p>
        <Image src={Seal} alt="seal image" />
        <div className="modal-action">
          <button className="btn btn-primary" onClick={refreshPage}>
            Close :D
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ParentForm;
