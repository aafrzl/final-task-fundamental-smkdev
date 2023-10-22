import axios from "@/lib/api";
import CardMovie from "./CardMovie";

export default async function SearchResults({ keyword }) {
  const response = await axios.get(`/search/movie?query=${keyword}`);

  const movies = await response.data;

  return (
    <>
      {movies?.results?.length === 0 && (
        <div className="flex h-screen items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold">No Results Found</h1>
            <p className="text-center text-sm">
              Your search <span className="font-bold">{keyword}</span> did not
              match any movies.
            </p>
          </div>
        </div>
      )}
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
    </>
  );
}
