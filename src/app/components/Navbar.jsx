"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  if (!pathname.includes("dashboard"))
    return (
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <Link href="/" className="text-white hover:text-gray-300">
            <li>Home</li>
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300">
            <li>Services</li>{" "}
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            <li>About</li>
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    );
};

export default Navbar;
