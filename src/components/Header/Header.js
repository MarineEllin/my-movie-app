import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import MovieSearch from "../MovieSearch/MovieSearch";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Account from "./Account/Account";

const Header = async ({ locale }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={`/${locale}`}>MyMovieApp</Link>
      </div>
      {
        //To be implemented in next features
        /* <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href={`/${locale}/series`}>{dictionary.header.series}</Link>
            </li>
            <li>
              <Link href={`/${locale}/movies`}>{dictionary.header.films}</Link>
            </li>
          </ul>
        </nav>
      </div> */
      }
      <MovieSearch locale={locale} />
      <LanguageSelector />
      <Account locale={locale} />
    </header>
  );
};

export default Header;
