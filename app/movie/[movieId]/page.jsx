"use client";

import { useGetMoviesById } from "@/hooks/useMovies";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import { useParams } from "next/navigation";

export default function MovieDetailPage() {
  const params = useParams();
  const movieId = params.movieId;
  const movieDetail = useGetMoviesById(movieId);

  return (
    <section className="container mx-auto mt-10">
      <div className="flex flex-col items-start justify-start px-4">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-bold">Synopsis</h2>
          <hr className="ml-2 w-28 border border-[#CDCDCD] md:w-96" />
        </div>
        <p className="text-sm md:text-base">{movieDetail.overview}</p>
      </div>
      <div className="mb-5 mt-2 flex flex-col items-start justify-start px-4">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-bold">Movie Info</h2>
          <hr className="ml-2 w-28 border border-[#CDCDCD] md:w-96" />
        </div>
        <div className="flex items-start justify-start gap-x-6">
          <p className="text-sm font-bold md:text-base">Release Date</p>
          <p className="text-sm md:text-base">
            {formatDate(movieDetail.release_date)}
          </p>
        </div>
        <div className="flex items-start justify-start gap-x-6">
          <p className="text-sm font-bold md:text-base">Budget</p>
          <p className="text-sm md:text-base">
            {formatCurrency(movieDetail.budget)}
          </p>
        </div>
        <div className="flex items-start justify-start gap-x-6">
          <p className="text-sm font-bold md:text-base">Revenue</p>
          <p className="text-sm md:text-base">
            {formatCurrency(movieDetail.revenue)}
          </p>
        </div>
        <div className="flex items-start justify-start gap-x-6">
          <p className="text-sm font-bold md:text-base">Runtime</p>
          <p className="text-sm md:text-base">{movieDetail.runtime} minutes</p>
        </div>
        <div className="flex items-start justify-start gap-x-6">
          <p className="text-sm font-bold md:text-base">Genres</p>
          <p className="text-sm md:text-base">
            {movieDetail?.genres?.map((genre) => genre.name).join(", ")}
          </p>
        </div>
        <div className="flex items-start justify-start gap-x-6">
          <p className="text-sm font-bold md:text-base">Spoken Languages</p>
          <p className="text-sm md:text-base">
            {movieDetail?.spoken_languages?.map((lang) => lang.name).join(", ")}
          </p>
        </div>
        <div className="flex items-start justify-start gap-x-6">
          <p className="text-sm font-bold md:text-base">Production Companies</p>
          <p className="text-sm md:text-base">
            {movieDetail?.production_companies
              ?.map((company) => company.name)
              .join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}
