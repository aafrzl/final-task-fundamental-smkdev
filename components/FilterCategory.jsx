"use client";

import { genres } from "@/lib/data";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterCategory() {
  const router = useRouter();
  const params = useSearchParams();

  const [initialGenre, setInitalGenre] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (initialGenre === parseInt(params.get("genre"))) {
      setIsActive(true);
    } else if (initialGenre !== parseInt(params.get("genre"))) {
      setIsActive(false);
    }
  }, [initialGenre, params]);

  useEffect(() => {
    const page = parseInt(params.get("genre") || null);
    setInitalGenre(page);
  }, [params, initialGenre]);

  const handleGenre = (genre) => {
    let searchParams = new URLSearchParams();

    searchParams.set("genre", genre);

    router.push(`/?${searchParams.toString()}`);
  };

  const handleResetGenre = () => {
    let searchParams = new URLSearchParams();

    searchParams.set("genre", null);

    router.push(`/?${searchParams.toString()}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 xl:flex-row xl:justify-start">
      <button
        onClick={handleResetGenre}
        className={`ease-in-out] cursor-pointer rounded-full px-5 py-2 text-sm font-bold text-[#8C8989] transition duration-300 hover:bg-[#EB507F] hover:text-white ${
          params.get("genre") === null || params.get("genre", null) && !isActive
            ? "bg-[#EB507F] text-white"
            : "bg-transparent"
        }`}
      >
        All
      </button>
      {genres?.map((genre, index) => (
        <button
          onClick={() => handleGenre(genre.id)}
          key={index}
          className={`ease-in-out] cursor-pointer rounded-full px-5 py-2 text-sm font-bold text-[#8C8989] transition duration-300 hover:bg-[#EB507F] hover:text-white
          ${
            isActive && genre.id === initialGenre
              ? "bg-[#EB507F] text-white"
              : !isActive && genre.id !== initialGenre
              ? "bg-transparent"
              : ""
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}
