import MovieDetails from "@/components/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/SimilarMovies/SimilarMovies";
import { Constants } from "@/constants/Constants";
import { getMovieByPath } from "@/utils/movieClient";
import prisma from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = Constants.REVALIDATE_MOVIE_FREQUENCY;

const MovieIdPage = async ({ params: { id, locale } }) => {
  const movie = await getMovieByPath(`/movie/${id}`, [], locale);

  if (!movie.original_title) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails movie={movie} locale={locale} />
      <Suspense fallback={<p>Chargement...</p>}>
        <SimilarMovies movieId={movie.id} locale={locale} />
      </Suspense>
    </div>
  );
};

export default MovieIdPage;
