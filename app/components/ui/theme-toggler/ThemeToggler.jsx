"use client";

import { useEffect, useState } from "react";

import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

import clsx from "clsx";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={clsx("themeToggle", darkMode ? "bg-white" : "bg-sky-400")}
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={18} />
      <div
        className="ball"
        style={darkMode ? { left: "2xp" } : { right: "2px" }}
      >
        <BsSunFill className="text-yellow-400  mt-1 ml-1" size={16} />
      </div>
    </div>
  );
};

export default ThemeToggler;
