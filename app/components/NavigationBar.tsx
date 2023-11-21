import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/logo2.png";

const NavigationBar = () => {
  return (
    <div className="navbar bg-zinc-900 px-52 text-white">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          <Image src={Logo} alt="logo" className="w-8 h-8" />
          TangTutors
        </Link>
      </div>
      <div className="navbar-end flex-none">
        <ul className="menu menu-horizontal space-x-4 px-4 mx-1">
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
  );
};

export default NavigationBar;
