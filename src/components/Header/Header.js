import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MovieSearch from "../MovieSearch/MovieSearch";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { getDictionary } from "@/utils/dictionaries";

const Header = async ({ locale }) => {
  const dictionary = await getDictionary(locale);

  return (
    <header className={`${styles.header}`}>
      <div className={styles.logo}>
        <p>
          <Link href="/">MyMovieApp</Link>
        </p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href="/series">{dictionary.header.series}</Link>
            </li>
            <li>
              <Link href="/movies">{dictionary.header.films}</Link>
            </li>
          </ul>
        </nav>
      </div>
      <MovieSearch locale={locale} />
      <LanguageSelector />
      <div>
        <FontAwesomeIcon icon={faUser} className={styles.accountIcon} />
      </div>
    </header>
  );
};

export default Header;
