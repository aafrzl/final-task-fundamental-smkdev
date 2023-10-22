import axios from "@/lib/api";
import CardMovie from "./CardMovie";

export default async function SearchResults({ keyword }) {
  const response = await axios.get(`/search/movie?query=${keyword}`);

  const movies = await response.data;

  return (
    <div className="grid grid-cols-1 gap-y-10 px-2 md:grid-cols-3 md:gap-5 xl:grid-cols-5 xl:px-0">
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
  );
}
