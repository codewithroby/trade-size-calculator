"use client";

import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

import { useTheme } from "@/context/theme-context";

export const ThemeSwitchButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <span
      className="fixed right-6 top-6 z-[999] flex size-12 cursor-pointer items-center justify-center rounded-full bg-black text-white shadow dark:bg-white dark:text-black sm:right-10 sm:top-10"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <FiMoon className="size-5" />
      ) : (
        <MdOutlineWbSunny className="size-5" />
      )}
    </span>
  );
};
