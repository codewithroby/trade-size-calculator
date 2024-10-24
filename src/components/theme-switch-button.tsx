"use client";

import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

import { useTheme } from "@/context/theme-context";

export const ThemeSwitchButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <span
      className="fixed right-6 top-6 z-[999] flex size-12 cursor-pointer items-center justify-center rounded-full bg-white shadow sm:right-10 sm:top-10 sm:size-14 dark:bg-black dark:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <MdOutlineWbSunny className="size-5" />
      ) : (
        <FiMoon className="size-5" />
      )}
    </span>
  );
};
