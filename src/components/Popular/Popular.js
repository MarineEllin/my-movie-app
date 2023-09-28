import React from "react";
import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../MediaCard/MediaCard";
import styles from "./Popular.module.scss";
import { getDictionary } from "@/utils/dictionaries";

const Popular = async ({ locale }) => {
  const { results } = await getMovieByPath("/discover/movie", [], locale);
  const dictionary = await getDictionary(locale);
  const popularMovies = results.slice(0, 16);
  return (
    <div className={styles.popularContainer}>
      <h1>{dictionary.popular.title}</h1>
      <div className={styles.movieContainer}>
        {popularMovies.map((movie) => (
          <MediaCard key={movie.id} media={movie} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
