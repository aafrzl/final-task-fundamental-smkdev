"use client";

import CardMovie from "@/components/CardMovie";
import Skeleton from "@/components/Skeleton";
import FilterCategory from "@/components/FilterCategory";
import Paginate from "@/components/Paginate";

import { useGetMovies } from "@/hooks/useMovies";
import { useSearchParams } from "next/navigation";

export default function MovieList() {
  const params = useSearchParams();
  const movies = useGetMovies(params.get("page") || "1", params.get("genre"));

  if (!movies.results || movies.results.length === 0) {
    return <Skeleton />;
  }

  return (
    <section className="container mx-auto mb-10">
      <div className="flex flex-col mb-10">
        <h2 className="text-2xl xl:text-5xl font-bold text-[#8C8989] text-center xl:text-start mb-6">
          Browse by category
        </h2>
        <FilterCategory />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-y-10 md:gap-5 px-2 xl:px-0">
        {movies?.results?.map((movie) => (
          <CardMovie
            key={movie.id}
            image={movie.poster_path}
            id={movie.id}
            title={movie.original_title}
            genre={movie.genre_ids}
          />
        ))}
      </div>

      <Paginate movies={movies} />
    </section>
  );
}
