import React from "react";
import styles from "./SearchResults.module.scss";
import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "@/components/MediaCard/MediaCard";

const SearchResults = async ({ searchParams, genreId, locale }) => {
  console.log(locale);
  const { results } = await getMovieByPath(
    "/discover/movie",
    [
      { key: "sort_by", value: searchParams.sort_by },
      {
        key: "release_date.gte",
        value: searchParams["release_date.gte"],
      },
      {
        key: "release_date.lte",
        value: searchParams["release_date.lte"],
      },
      {
        key: "with_genres",
        value: genreId,
      },
    ],
    locale
  );

  return (
    <div className={styles.results}>
      {results
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <MediaCard key={movie.id} media={movie} />
        ))}
    </div>
  );
};

export default SearchResults;