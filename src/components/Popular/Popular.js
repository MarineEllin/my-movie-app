import React from 'react';
import { getMovieByPath } from '@/utils/movieClient';
import MediaCard from '../MediaCard/MediaCard';
import styles from "./Popular.module.scss";

const Popular = async () => {
    const { results } = await getMovieByPath("/movie/popular");
    const popularMovies = results.slice(0, 16);
    return (
        <div className={styles.popularContainer}>
            <h1>Les plus populaires</h1>
            <div className={styles.movieContainer}>
                {popularMovies.map((movie) => (
                    <MediaCard key={movie.id} media={movie}/>
                ))}
            </div>
        </div>
    );
};

export default Popular;