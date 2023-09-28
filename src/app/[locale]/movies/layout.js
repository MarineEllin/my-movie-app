import React from "react";
import styles from "./layout.module.scss";

const MoviesLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MoviesLayout;
