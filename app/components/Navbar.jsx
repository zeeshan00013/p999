"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-500  ">
      <nav className="container mx-auto px-4 md:px-10 flex items-center justify-between py-5">
        <div className="text-xl font-bold text-[#f0c059c5]">
          <Link href="/">
            <p className="text-4xl font-bold text-white">W567</p>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link href={"/login"}>
            <button className="bg-white  text-green-500 px-2 rounded-md p-2 cursor-pointer">
              login & Register Guide
            </button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden px-4 pb-4  border-t">
          <ul className="space-y-3 text-white font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>

            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
