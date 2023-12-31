import Image from "next/image";
import Link from "next/link";
import FilmBox from "./home/FilmBox";
import IsometricGrid from "./home/IsometricGrid";
import ParentForm from "./home/ParentForm";

import Tutor from "public/tutor.png";
import JonathanYun from "public/JonathanYun.png";
import vectorImage1 from "public/vector1.png";
import vectorImage2 from "public/vector2.png";

export default function Home() {
  return (
    <div>
      <div className="relative bg-cover bg-left flex items-center bg-fffefa min-h-[600px] 2xl:h-[900px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={vectorImage1}
            className="absolute object-cover h-full w-full"
            alt="Vector Image"
          />
        </div>
        <div className="z-10 p-4 max-w-6xl m-auto min-w-[300px]">
          <div className="pt-10 min-h-screen">
            <div className="hero-content flex-col min-[850px]:flex-row-reverse">
              <div className="relative min-w-[300px] max-w-[500px] max-[850px]:w-[50%]">
                <Image
                  src={Tutor}
                  alt="tutor image"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div>
                <h1 className="text-5xl font-bold">Welcome to Tang Tutors!!</h1>
                <p className="py-6">
                  Hi! I&apos;m <span className="font-bold">Oscar!</span> I am
                  currently studying in UQ for computer science and would love
                  to share my every expanding knowledge by tutoring. <br />{" "}
                  <br />
                  Embark on a personalized learning adventure with me and unlock
                  your full potential —{" "}
                  <span className="font-bold">Your future tutor,</span>{" "}
                  perchance
                </p>
                <a href="#form">
                  <button className="btn btn-outline btn-primary">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
            <div className="divider">KNOWLEDGE IS POWER</div>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold">QCE and QCAA Curriculum</h1>
                <p className="py-6">
                  This is a high school tutoring website for those who are in
                  need of help in QCE and the QCAA curriculum. Here at Tang
                  Tutors, we are committed to helping and educating every
                  student with personalised tutoring sessions.
                </p>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full max-sm:hidden">
                    <Link href="https://www.linkedin.com/in/jonathan-yun-6824761b9/">
                      <Image
                        className="max-sm:hidden"
                        alt="Profile Picture of a Tutor"
                        src={JonathanYun}
                      />
                    </Link>
                  </div>
                </div>
                <div className="chat-bubble w-[400px]">
                  <p>
                    Hi there! <br />
                    I&apos;m so glad to be your tutor! <br /> So I hear
                    you&apos;re having difficulty with Digital Solutions and
                    Math Methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1d232a] text-white">
        <div className="z-10 p-4 max-w-6xl m-auto min-w-[300px] pt-12">
          <h1 className="text-4xl font-bold text-center">
            QCAA Subjects I am Most Confident in Tutoring!
          </h1>
          <br />
        </div>
        <div className="lg:flex justify-center min-lg:space-x-6 min-[1200px]:space-x-24 max-lg:space-y-6 text-white pb-12">
          <div
            className="mockup-code max-w-xs text-lg w-xs max-lg:mx-auto"
            style={{ height: "6rem" }}>
            <pre data-prefix="$" className="text-success">
              <code>Digital Solutions</code>
            </pre>
          </div>
          <div className="flex justify-center">
            <IsometricGrid />
          </div>
          <div className="flex justify-center">
            <FilmBox />
          </div>
        </div>
      </div>
      <div className="relative bg-cover bg-left flex items-center bg-fffefa">
        <div className="absolute inset-0 z-0 right-0 w-full h-full">
          <Image
            src={vectorImage2}
            className="absolute object-cover w-full h-full"
            alt="Vector Image"
          />
        </div>
        <div className="z-10 p-4 max-w-6xl m-auto min-w-[300px] py-12">
          <h1 className="text-3xl font-bold">So why choose me?</h1>
          <p>
            Well... here&apos; a timeline of what it might look like if you
            start tuition today!
          </p>
          <ul className="timeline max-xl:hidden text-white justify-center pt-10">
            <li>
              <div className="timeline-start timeline-box mx-6 bg-[#1d232a]">
                Signing up to Tang Tutors
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                  fill="#1d232a">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    fill="#1d232a"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                  fill="#1d232a">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    fill="#1d232a"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box mx-auto bg-[#1d232a]">
                Recognising Weakness and Strength
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box mx-auto bg-[#1d232a]">
                Personalised Study Plan
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                  fill="#1d232a">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    fill="#1d232a"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                  fill="#1d232a">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    fill="#1d232a"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box mx-auto bg-[#1d232a]">
                Weekly Tutoring Sessions
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box mx-auto bg-[#1d232a]">
                Success!!
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                  fill="#1d232a">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    fill="#1d232a"
                  />
                </svg>
              </div>
            </li>
          </ul>
          <ul className="timeline timeline-vertical xl:hidden text-white justify-center pt-10">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                  fill="#1d232a">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    fill="#1d232a"
                  />
                </svg>
              </div>
              <div className="timeline-start timeline-box bg-[#1d232a]">
                Signing up to Tang Tutors
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                  fill="#1d232a">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    fill="#1d232a"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box bg-[#1d232a]">
                Recognising Weakness and Strength
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box bg-[#1d232a]">
                Personalised Study Plan
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                  fill="#1d232a">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    fill="#1d232a"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                  fill="#1d232a">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    fill="#1d232a"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box bg-[#1d232a]">
                Weekly Tutoring Sessions
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box bg-[#1d232a]">
                Success!!
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                  fill="#1d232a">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    fill="#1d232a"
                  />
                </svg>
              </div>
            </li>
          </ul>
          <div className="divider pt-16">START YOUR JOURNEY NOW</div>
          <div>
            <h1
              className="pt-12 text-4xl font-bold text-gray-900"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}>
              Enquire here to{" "}
              <span className="text-orange-600">learn more</span> and receive a{" "}
              <span className="text-indigo-600">free tutoring session!</span>
            </h1>
          </div>
          <div id="form">
            <ParentForm />
          </div>
        </div>
      </div>
    </div>
  );
}
