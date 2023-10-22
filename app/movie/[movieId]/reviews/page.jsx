"use client"

import Review from "@/components/Review";
import { useParams } from "next/navigation";

export default function MovieOverviewPage() {
  const params = useParams();
  const { movieId } = params;

  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col items-start justify-start px-4">
        <div className="mb-10 flex items-center justify-center">
          <h2 className="text-2xl font-bold md:text-3xl">Reviews</h2>
          <hr className="ml-2 w-28 border border-[#CDCDCD] md:w-96" />
        </div>
        <Review movieId={movieId} />
      </div>
    </section>
  );
}
