import React, { Suspense } from "react";
import styles from "./MovieDetails.module.scss";
import Image from "next/image";
import MovieActors from "./MovieActors/MovieActors";
import { getDictionary } from "@/utils/dictionaries";

const MovieDetails = async ({ movie, locale }) => {
  const dictionary = await getDictionary(locale);
  return (
    <div className={styles.movieContainer}>
      <div className={styles.backgroundContainer}>
        {movie.backdrop_path && (
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
            alt={movie.title}
            fill
            sizes="100%"
          />
        )}
      </div>
      <div className={styles.movieContent}>
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w342${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            sizes="100%"
          />
        </div>
        <div className={styles.movieDetails}>
          <h1>{movie.title}</h1>
          <div className={styles.details}>
            <h3>Synopsis</h3>
            <p className={styles.overview}>{movie.overview}</p>
          </div>
          <div className={styles.details}>
            <h3>{dictionary.movie.releaseDate}</h3>
            <p>{new Date(movie.release_date).toLocaleDateString("fr-FR")}</p>
          </div>
          <div>
            <h3>{dictionary.movie.vote}</h3>
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>
          <div className={styles.details}>
            <h3>{dictionary.movie.productionCompanies}</h3>
            <p>
              {movie.production_companies.map((comp) => comp.name).join(", ")}
            </p>
          </div>
          <div className={styles.details}>
            <h3>{dictionary.movie.actors}</h3>
            <Suspense fallback={<p>Chargement...</p>}>
              <MovieActors movieId={movie.id} locale={locale} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
