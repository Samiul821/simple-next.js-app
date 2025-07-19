"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const router = useRouter();
  const isLoggedIn = false; // Simulating a logged-in state

  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">About Us</h1>
      <p className="mt-2">
        We are a company dedicated to providing the best services to our
        customers.
      </p>
      <Link href="/about/address" className="block mt-4 text-blue-600 underline">
        Go to Address Page
      </Link>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        type="button"
        onClick={handleNavigation}
      >
        Go to Address Page (Programmatic)
      </button>
    </div>
  );
};

export default AboutPage;
