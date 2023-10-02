import React from "react";
import styles from "./SearchResults.module.scss";
import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "@/components/MediaCard/MediaCard";
import { getServerSession } from "next-auth";
import prisma from "@/utils/prisma";

const SearchResults = async ({ searchParams, genreId, locale }) => {
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

  return (
    <div className={styles.results}>
      {results
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <MediaCard
            key={movie.id}
            media={movie}
            locale={locale}
            movieLikes={movieLikesList}
          />
        ))}
    </div>
  );
};

export default SearchResults;
