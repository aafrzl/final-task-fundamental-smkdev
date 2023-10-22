"use client";

import { useGetMoviesById } from "@/hooks/useMovies";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import Rating from "./Rating";

export default function Banner() {
  const params = useParams();
  const movieId = params.movieId;
  const movie = useGetMoviesById(movieId);

  return (
    <div className="relative w-full">
      <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50" />
      <Image
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : `https://via.placeholder.com/500x500?text=No+Image`
        }
        alt="Banner"
        width={1000}
        height={1000}
        priority
        className="h-full w-full object-cover object-center xl:h-[500px]"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-start justify-center px-10 xl:w-1/2">
        <h1 className="text-xl font-bold text-white md:text-4xl">
          {movie?.title}
        </h1>
        <div className="flex items-center gap-x-2">
          <Rating />
          <p className="text-sm text-white">{movie?.vote_average} reviews</p>
        </div>
        <p className="md:text-md text-clip text-xs font-medium text-white xl:text-base">
          {movie?.overview}
        </p>
        <div className="mt-2 flex items-center gap-x-2">
          <button className="rounded-md bg-[#FE024E] px-2 py-3 text-sm font-semibold text-white hover:bg-red-400">
            Watch Trailer
          </button>
          <button className="rounded-md border border-zinc-50 bg-transparent px-2 py-3 text-sm font-semibold text-white outline-none hover:bg-zinc-200 hover:text-zinc-900">
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}
