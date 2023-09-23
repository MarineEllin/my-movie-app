import SearchSideBar from "@/components/SearchSideBar/SearchSideBar";
import React from "react";
import styles from "./layout.module.scss";
import { getMovieByPath } from "@/utils/movieClient";
import CategoryTitle from "@/components/SearchSideBar/CategoryTitle/CategoryTitle";

const MovieSearchLayout = async ({ children }) => {
  const { genres } = await getMovieByPath("/genre/movie/list");

  return (
    <div className={styles.container}>
      <CategoryTitle genres={genres} />
      <div className={styles.content}>
        <SearchSideBar genres={genres} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MovieSearchLayout;
