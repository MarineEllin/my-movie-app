import SearchSideBar from "@/components/SearchSideBar/SearchSideBar";
import React from "react";
import styles from "./layout.module.scss";
import { getMovieByPath } from "@/utils/movieClient";
import CategoryTitle from "@/components/SearchSideBar/CategoryTitle/CategoryTitle";

const MovieSearchLayout = async ({ children, params: { locale } }) => {
  const { genres } = await getMovieByPath("/genre/movie/list", [], locale);

  return (
    <div className={styles.container}>
      <CategoryTitle genres={genres} locale={locale} />
      <div className={styles.content}>
        <SearchSideBar genres={genres} locale={locale} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MovieSearchLayout;
