import React from "react";
import styles from "./ActorsFilmography.module.scss";
import { getMovieByPath } from "@/utils/movieClient";
import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/utils/dictionaries";

const ActorsFilmography = async ({ actorId, locale }) => {
  const { cast } = await getMovieByPath(
    `/person/${actorId}/movie_credits`,
    [],
    locale
  );
  const dictionary = await getDictionary(locale);
  return (
    <div className={styles.container}>
      <h2>{dictionary.filmo.title}</h2>
      <div className={styles.content}>
        {cast
          .filter((film) => film.poster_path && film.title)
          .slice(0, 6)
          .map((film) => (
            <div key={film.id}>
              {film.title ? (
                <Link href={`/movies/${film.id}`} className={styles.film}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${film.poster_path}`}
                    alt={film.title}
                    width={120}
                    height={180}
                  />
                  <p>{film.title}</p>
                </Link>
              ) : (
                <Image
                  src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${film.poster_path}`}
                  alt={film.title}
                  width={120}
                  height={180}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ActorsFilmography;
