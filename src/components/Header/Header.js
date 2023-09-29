import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import MovieSearch from "../MovieSearch/MovieSearch";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { getDictionary } from "@/utils/dictionaries";
import Account from "./Account/Account";

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
      <Account locale={locale} />
    </header>
  );
};

export default Header;
