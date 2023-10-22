"use client";

import { useGetMoviesReviewsById } from "@/hooks/useMovies";
import { formatDate } from "@/utils/formatDate";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Review({ movieId }) {
  const reviews = useGetMoviesReviewsById(movieId);

  return (
    <div className="flex flex-col items-start justify-start">
      {reviews?.results?.map((review) => (
        <div
          key={review.id}
          className="mb-10 flex w-full flex-col items-start justify-start"
        >
          <div className="flex items-center justify-start gap-x-2">
            <Image
              src={
                review?.author_details?.avatar_path === null
                  ? `https://ui-avatars.com/api/?name=${review.author_details?.username}&background=random&color=fff`
                  : `https://image.tmdb.org/t/p/original${review.author_details?.avatar_path}`
              }
              width={500}
              height={500}
              alt="avatar"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{review.author}</h3>
              <div className="flex items-center gap-x-2">
                <div className="inline-flex rounded-md bg-zinc-900 p-1">
                  <Star className="mr-1 h-4 w-4 text-yellow-400" />
                  <p className="text-xs font-bold text-white">
                    {review.author_details.rating}
                  </p>
                </div>
                <p className="text-xs text-gray-400">
                  Written by{" "}
                  <span className="font-bold text-zinc-800">
                    {review.author_details.username}
                  </span>{" "}
                  on {formatDate(review.created_at)}
                </p>
              </div>
            </div>
          </div>
          <p className="mt-2 text-justify text-sm text-gray-400">
            {review.content}
          </p>
        </div>
      ))}
    </div>
  );
}
