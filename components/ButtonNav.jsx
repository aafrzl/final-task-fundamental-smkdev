import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ButtonNav() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const movieId = params.movieId;

  const [isActived, setIsActived] = useState(0);

  useEffect(() => {
    switch (pathname) {
      case `/movie/${movieId}`:
        setIsActived(0);
        break;
      case `/movie/${movieId}/casts`:
        setIsActived(1);
        break;
      case `/movie/${movieId}/reviews`:
        setIsActived(2);
        break;
      default:
        setIsActived(0);
        break;
    }
  }, [pathname, movieId]);

  return (
    <div className="mx-4 mt-5 flex items-center justify-start gap-x-2">
      <button
        onClick={() => router.push(`/movie/${movieId}`)}
        className={`rounded-xl px-4 py-2 text-sm md:text-base font-semibold hover:bg-rose-400 hover:text-white ${
          isActived === 0 ? "bg-[#EB507F] text-white" : "text-zinc-900"
        }`}
      >
        Overview
      </button>
      <button
        onClick={() => router.push(`/movie/${movieId}/casts`)}
        className={`rounded-xl px-4 py-2 text-sm md:text-base font-semibold hover:bg-rose-400 hover:text-white ${
          isActived === 1 ? "bg-[#EB507F] text-white" : "text-zinc-900"
        }`}
      >
        Casts
      </button>
      <button
        onClick={() => router.push(`/movie/${movieId}/reviews`)}
        className={`rounded-xl px-4 py-2 text-sm md:text-base font-semibold hover:bg-rose-400 hover:text-white ${
          isActived === 2 ? "bg-[#EB507F] text-white" : "text-zinc-900"
        }`}
      >
        Reviews
      </button>
    </div>
  );
}
