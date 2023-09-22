"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import styles from "./MovieSearch.module.scss";
import MediaCard from "@/components/MediaCard/MediaCard";
import MovieSearcResults from "./MovieSearchResults/MovieSearcResults";

const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [hasFocus, setHasFocus] = useState(false);

  const [isOpen, setIsOpen] = useState(true);

  const updateMovieSearch = async (query) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    setMovieResults(results.filter((movie) => movie.backdrop_path));
  };

  const handleFocus = () => {
    setHasFocus(true);
    setIsOpen(true);
  }

  return (
    <div className={styles.container}>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        onChange={(e) => updateMovieSearch(e.target.value)}
        placeholder="Rechercher un titre ..."
        onBlurCapture={() => setHasFocus(false)}
        onFocus={handleFocus}
        className={styles.input}
      />
     {movieResults.length > 0 && <MovieSearcResults movieResults={movieResults} isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default MovieSearch;