import MovieDetails from "@/components/MovieDetails/MovieDetails";
import { Constants } from "@/constants/Constants";
import { getMovieByPath } from "@/utils/movieClient";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = Constants.REVALIDATE_MOVIE_FREQUENCY;

const MovieIdPage = async ({ params }) => {
  const movie = await getMovieByPath(`/movie/${params.id}`);
  console.log(movie);
  if (!movie.original_title) {
    return notFound();
  }
  return <MovieDetails movie={movie} />;
};

export default MovieIdPage;
