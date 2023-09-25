import React from "react";
import styles from "./SimilarMovies.module.scss";
import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../MediaCard/MediaCard";

const SimilarMovies = async ({ movieId }) => {
  const { results } = await getMovieByPath(`/movie/${movieId}/similar`);
  return (
    <div className={styles.container}>
      <div className={styles.movies}>
        {results
          .filter((movie) => movie.poster_path)
          .slice(0, 4)
          .map((movie) => (
            <MediaCard media={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
