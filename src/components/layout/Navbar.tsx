"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    // Add more routes as needed
  ];

  return (
    <nav className="w-full px-6 py-4 bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          MyPortfolio
        </Link>
        <div className="flex gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-blue-600"
                  : "text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
