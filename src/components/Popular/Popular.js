import React from "react";
import { getMovieByPath, getMovieLikes } from "@/utils/movieClient";
import MediaCard from "../MediaCard/MediaCard";
import styles from "./Popular.module.scss";
import { getDictionary } from "@/utils/dictionaries";
import { getServerSession } from "next-auth";

const Popular = async ({ locale }) => {
  const { user: userSession } = await getServerSession();

  const { movieLikes } = await prisma.user.findFirst({
    where: { email: userSession.email },
    include: {
      movieLikes: true,
    },
  });

  const { results } = await getMovieByPath("/discover/movie", [], locale);
  const dictionary = await getDictionary(locale);
  const popularMovies = results.slice(0, 16);
  return (
    <div className={styles.popularContainer}>
      <h1>{dictionary.popular.title}</h1>
      <div className={styles.movieContainer}>
        {popularMovies.map((movie) => (
          <MediaCard
            key={movie.id}
            media={movie}
            locale={locale}
            movieLikes={movieLikes}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
