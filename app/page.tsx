import Image from "next/image";

import Tutor from "public/tutor.png";
import vectorImage from "public/vector1.png";
import JonathanYun from "public/JonathanYun.png";
import FilmBox from "./components/FilmBox";
import IsometricGrid from "./components/IsometricGrid";

export default function Home() {
  return (
    <div>
      <div className="relative bg-cover bg-left flex items-center bg-fffefa min-h-[600px] max-h-[900px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={vectorImage}
            className="absolute object-cover h-full w-full"
            alt="Vector Image"
          />
        </div>
        <div className="z-10 p-4 max-w-6xl m-auto min-w-[300px]">
          <div className="pt-10 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image src={Tutor} alt="tutor image" width="500" />
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
                <button className="btn btn-outline btn-primary">
                  Get Started
                </button>
              </div>
            </div>
            <div className="divider">KNOWLEDGE IS POWER</div>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left pl-12">
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
                  <div className="w-10 rounded-full">
                    <a href="https://www.linkedin.com/in/jonathan-yun-6824761b9/">
                      <Image
                        alt="Profile Picture of a Tutor"
                        src={JonathanYun}
                      />
                    </a>
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
      <div className="bg-base-100 text-white">
        <div className="z-10 p-4 max-w-6xl m-auto min-w-[300px] pt-12">
          <h1 className="text-4xl font-bold text-center">
            QCAA Subjects I am Most Confident in Tutoring!
          </h1>
          <br />
        </div>
      </div>
      <div className="flex justify-center space-x-24 bg-base-100 text-white pb-12">
        <div
          className="mockup-code max-w-xs text-lg"
          style={{ height: "6rem" }}>
          <pre data-prefix="$" className="text-success">
            <code>Digital Solutions</code>
          </pre>
        </div>
        <IsometricGrid />
        <FilmBox />
      </div>
      <div className="bg-slate-300">
        <div className="z-10 p-4 max-w-6xl m-auto min-w-[300px] py-12">
          <h1 className="text-3xl font-bold">So why choose me?</h1>
          <p>
            Well... here&apos; a timeline of what it might look like if you
            start tuition today!
          </p>
          <ul className="timeline text-white justify-center pt-10">
            <li>
              <div className="timeline-start timeline-box mx-6">
                Signing up to Tang Tutors
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
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
                  className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box mx-auto">
                Recognising Weakness and Strength
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box mx-auto">
                Personalised Study Plan
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
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
                  className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box mx-auto">
                Weekly Tutoring Sessions
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box mx-auto">
                Success!!
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
