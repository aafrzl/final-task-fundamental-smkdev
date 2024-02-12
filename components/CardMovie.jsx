import { useGetMoviesGenres } from "@/hooks/useMovies";
import Image from "next/image";
import Link from "next/link";

export default function CardMovie({
  image,
  id,
  title,
  genre,
}) {
  const genres = useGetMoviesGenres();

  const genreName = genre
    ?.map((id) => genres?.genres?.find((genre) => genre.id === id)?.name)
    .join(", ");

  return (
    <Link href={`/movie/${id}`}>
      <div className="rounded-md flex flex-col hover:scale-95 transition-all duration-150 ease-in-out">
        <Image
          src={`https://image.tmdb.org/t/p/original/${image}`}
          alt="Movie Image"
          width={500}
          height={500}
          className="aspect-[2/3] w-full rounded-md"
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/500x500/374151/FFFFFF?text=Loading..."
        />
        <div className="mt-4 px-2">
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-md">{genreName}</p>
        </div>
      </div>
    </Link>
  );
}
