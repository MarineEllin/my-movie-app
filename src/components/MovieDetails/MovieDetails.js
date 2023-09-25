import React, { Suspense } from "react";
import styles from "./MovieDetails.module.scss";
import Image from "next/image";
import MovieActors from "./MovieActors/MovieActors";

const MovieDetails = ({ movie }) => {
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
            <h3>Date de sortie : </h3>
            <p>{new Date(movie.release_date).toLocaleDateString("fr-FR")}</p>
          </div>
          <div>
            <h3>Note :</h3>
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>
          <div className={styles.details}>
            <h3>Compagnies de production : </h3>
            <p>
              {movie.production_companies.map((comp) => comp.name).join(", ")}
            </p>
          </div>
          <div className={styles.details}>
            <h3>Acteurs : </h3>
            <Suspense fallback={<p>Chargement...</p>}>
              <MovieActors movieId={movie.id} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
