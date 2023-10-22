"use client";

import Cast from "@/components/Cast";
import { useParams } from "next/navigation";

export default function CastMovieDetailPage() {
  const params = useParams();
  const movieId = params.movieId;

  return (
    <section className="container mx-auto mt-10 mb-10">
      <div className="flex flex-col items-start justify-start px-4">
        <div className="flex items-center justify-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Casts</h2>
          <hr className="ml-2 w-28 border border-[#CDCDCD] md:w-96" />
        </div>
        <Cast movieId={movieId} />
      </div>
    </section>
  );
}
