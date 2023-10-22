"use client";

import { useGetMoviesUpcoming } from "@/hooks/useMovies";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageCarousel() {
  const moviesUpcoming = useGetMoviesUpcoming();
  moviesUpcoming?.results?.splice(6);

  return (
    <section className="mb-14">
      <Carousel
        autoPlay
        infiniteLoop
        className="w-full"
        showArrows={false}
        dynamicHeight
        interval={5000}
        transitionTime={2000}
        showStatus={false}
        showThumbs={false}
      >
        {moviesUpcoming?.results?.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <Image
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                  : `https://via.placeholder.com/500x500?text=No+Image`
              }
              alt={movie.title}
              width={500}
              height={300}
              priority
              className="object-cover object-center h-full lg:h-96"
            />
            <div
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold cursor-pointer transition duration-300 ease-in-out hover:bg-opacity-20"
            >
              <h2>
                {movie.title} ({movie.release_date.split("-")[0]})
              </h2>
            </div>
          </Link>
        ))}
      </Carousel>
    </section>
  );
}
