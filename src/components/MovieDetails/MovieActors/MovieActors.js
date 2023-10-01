import React from "react";
import styles from "./MovieActors.module.scss";
import { getMovieByPath } from "@/utils/movieClient";
import Image from "next/image";
import Link from "next/link";

const MovieActors = async ({ movieId, locale }) => {
  const { cast } = await getMovieByPath(`/movie/${movieId}/credits`);
  return (
    <div className={styles.cast}>
      {cast
        .filter((person) => person.profile_path)
        .slice(0, 4)
        .map((person) => (
          <div key={person.id}>
            <Link
              href={`/${locale}/actors/${person.id}/`}
              className={styles.person}
            >
              <div className={styles.image}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w185${person.profile_path}`}
                  alt={person.name}
                  width={100}
                  height={100}
                />
              </div>
              <p className={styles.name}>{person.name}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MovieActors;
