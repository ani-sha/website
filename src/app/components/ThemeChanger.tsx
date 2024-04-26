"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  if (theme === "dark") {
    return (
      <button onClick={() => setTheme("light")}>
        <Sun size={20} />
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        setTheme("dark");
      }}
    >
      <MoonStar size={20} />
    </button>
  );
};
