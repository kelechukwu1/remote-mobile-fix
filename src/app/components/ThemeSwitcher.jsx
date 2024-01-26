"use client";
import React, { useEffect, useState } from "react";

export const Toggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
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
      className="dark:bg-black bg-red-500 cursor-pointer rounded-full"
      onClick={() => setDarkMode(!darkMode)}
    >
      <div className="text-white dark:bg-black bg-green-500">light</div>
      <div className="text-white dark:bg-white dark:text-black bg-black">
        dark
      </div>
    </div>
  );
};
