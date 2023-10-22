"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/404-not-found.png"
          alt="404 - Page Not Found"
          width={300}
          height={300}
          className="object-contain"
        />
        <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
        <p className="text-center text-sm">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <button
          onClick={() => router.push("/")}
          className="hover:bg-blue-700 rounded bg-blue px-4 py-2 font-bold text-white"
        >
          Go back to home
        </button>
      </div>
    </div>
  );
}
