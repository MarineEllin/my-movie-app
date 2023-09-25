import MovieDetails from "@/components/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/SimilarMovies/SimilarMovies";
import { Constants } from "@/constants/Constants";
import { getMovieByPath } from "@/utils/movieClient";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = Constants.REVALIDATE_MOVIE_FREQUENCY;

const MovieIdPage = async ({ params }) => {
  const movie = await getMovieByPath(`/movie/${params.id}`);
  if (!movie.original_title) {
    return notFound();
  }
  return (
    <div>
      <MovieDetails movie={movie} />
      <Suspense fallback={<p>Chargement...</p>}>
        <SimilarMovies movieId={movie.id} />
      </Suspense>
    </div>
  );
};

export default MovieIdPage;
