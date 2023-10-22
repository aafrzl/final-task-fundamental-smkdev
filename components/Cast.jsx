"use client";

import { useGetCastById } from "@/hooks/useMovies";
import Image from "next/image";

export default function Cast({ movieId }) {
  const casts = useGetCastById(movieId);

  if (casts.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300/30"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {casts?.cast?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center gap-y-2"
        >
          <Image
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                : `https://via.placeholder.com/500x500?text=No+Image`
            }
            alt={item.name}
            width={500}
            height={500}
            priority
            className="aspect-square rounded-md object-cover hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer"
          />
          <p className="text-sm font-bold">{item.name}</p>
          <p className="text-sm">{item.character}</p>
        </div>
      ))}
    </div>
  );
}
