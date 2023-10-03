import MovieDetails from "@/components/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/SimilarMovies/SimilarMovies";
import { Constants } from "@/constants/Constants";
import { getMovieByPath } from "@/utils/movieClient";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = Constants.REVALIDATE_MOVIE_FREQUENCY;

const MovieIdPage = async ({ params: { id, locale } }) => {
  const session = await getServerSession();
  let user;
  if (session != null) {
    user = session.user;
  } else {
    user = null;
  }
  const movie = await getMovieByPath(`/movie/${id}`, [], locale);

  if (!movie.original_title) {
    return notFound();
  }

  console.log(`session from getSession ${session}`);

  return (
    <div>
      <MovieDetails movie={movie} locale={locale} user={user} />
      <Suspense fallback={<p>Chargement...</p>}>
        <SimilarMovies movieId={movie.id} locale={locale} user={user} />
      </Suspense>
    </div>
  );
};

export default MovieIdPage;
