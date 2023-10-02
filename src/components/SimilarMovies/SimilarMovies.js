import React from "react";
import styles from "./SimilarMovies.module.scss";
import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../MediaCard/MediaCard";
import { getServerSession } from "next-auth";
import prisma from "@/utils/prisma";

const SimilarMovies = async ({ movieId, locale }) => {
  const { results } = await getMovieByPath(
    `/movie/${movieId}/similar`,
    [],
    locale
  );

  const user = getServerSession();
  let movieLikesList = [];

  if (user != null) {
    const { movieLikes } = await prisma.user.findFirst({
      where: { email: user.email },
      include: {
        movieLikes: true,
      },
    });
    movieLikesList = movieLikes;
  }

  console.log(movieLikesList);

  return (
    <div className={styles.container}>
      <div className={styles.movies}>
        {results
          .filter((movie) => movie.poster_path)
          .slice(0, 4)
          .map((movie) => (
            <MediaCard
              media={movie}
              key={movie.id}
              locale={locale}
              movieLikes={movieLikesList}
            />
          ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
