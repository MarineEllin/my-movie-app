import React from "react";
import styles from "./layout.module.scss";

const seriesLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default seriesLayout;
