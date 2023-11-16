import React from "react";
import Link from "next/link";
import Image from "next/image";
import Orangutan from "public/orangutan.jpg";
import vectorImage1 from "public/vector1.png";

const About = () => {
  return (
    <div>
      <div className="relative bg-cover bg-left flex items-center bg-fffefa min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={vectorImage1}
            className="absolute object-cover h-full w-full"
            alt="Vector Image"
          />
        </div>
        <div className="z-10 p-4 max-w-6xl m-auto min-w-[300px] pt-16">
          <h1 className="text-5xl font-bold pb-6">About us!</h1>
          <div className="chat chat-start">
            <div className="chat-bubble">
              We at Tang Tutors actually only consist of one person 😳 <br /> I
              started tutoring on January 2023, and decided that hand coding a
              website would help find students in need of tutoring.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble">
              Now, there have been countless students who I&apos;ve tutored and
              are very satisfied with the results! <br />
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble">
              Me personally, I really do enjoy teaching others and helping them
              hone their skills with different teaching styles for each
              individual student.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble">
              So there isn&apos;t much else to say so here is a picture of a
              cute baby orangutan :3
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative">
              <Image
                src={Orangutan}
                alt="baby orangutan image"
                className="max-w-3xl"
              />
              <p className="absolute bottom-0 left-0 text-left bg-white p-2">
                Photo by{" "}
                <Link className="link" href="https://unsplash.com/@licole">
                  Chris Charles
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
