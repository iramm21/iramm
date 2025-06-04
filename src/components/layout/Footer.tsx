"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiArrowUp, FiSun, FiMoon } from "react-icons/fi";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-10 px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
        {/* Socials */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <FiLinkedin />
          </a>
        </div>

        {/* Theme toggle + tech */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex items-center gap-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          )}
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Built with Next.js & Tailwind CSS
          </span>
        </div>

        <p className="text-xs">&copy; {year} Your Name. All rights reserved.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-6 top-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Back to Top"
        >
          <FiArrowUp />
        </button>
      </div>
    </footer>
  );
}
