"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import MobileMenu from "../mobile-menu/MobileMenu";
import ThemeToggler from "../theme-toggler/ThemeToggler";

import { Links } from "@/constants/Links";

import { IoMdPulse } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="w-full py-5 dark:bg-dark">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="flex-1">
          <div className="flex gap-1 items-center">
            <h1 className="font-bold text-gray-900 text-2xl dark:text-white">
              Tech blog
            </h1>
            <IoMdPulse className="text-3xl text-sky-400" aria-hidden="true" />
          </div>
        </Link>
        <div className="flex gap-8 max-lg:gap-5 items-center flex-1 max-md:hidden text-gray-600 dark:text-white justify-center">
          {Links.map((link, index) => (
            <Link key={link.index} href={link.route}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex-1 justify-end flex gap-3 items-center">
          <ThemeToggler />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
