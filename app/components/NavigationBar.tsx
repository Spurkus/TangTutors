import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/logo2.png";

const NavigationBar = () => {
  return (
    <div className="navbar bg-zinc-900 px-6 min-[1360px]:px-52 text-white">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          <Image src={Logo} alt="logo" className="w-8 h-8" />
          TangTutors
        </Link>
      </div>
      <div className="navbar-end flex-none">
        <ul className="menu menu-horizontal space-x-4 px-4 mx-1 hidden min-[950px]:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link
              className="text-gray-400"
              href="mailto:oscartang.dev@gmail.com">
              oscartang.dev@gmail.com
            </Link>
          </li>
        </ul>

        <div className="dropdown dropdown-end z-30 min-[950px]:hidden">
          <label tabIndex={0} className="m-1 btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-200 w-56 rounded-box z-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link
                className="text-gray-400"
                href="mailto:oscartang.dev@gmail.com">
                oscartang.dev@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
