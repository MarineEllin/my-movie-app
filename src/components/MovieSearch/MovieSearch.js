"use client";

import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import styles from "./MovieSearch.module.scss";
import MovieSearcResults from "./MovieSearchResults/MovieSearcResults";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDictionary } from "@/utils/dictionaries";

const MovieSearch = ({ locale }) => {
  const [dictionary, setDictionary] = useState();
  const [movieResults, setMovieResults] = useState([]);
  const [hasFocus, setHasFocus] = useState(false);

  const [isOpen, setIsOpen] = useState(true);

  const updateMovieSearch = async (query, locale) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    setMovieResults(results.filter((movie) => movie.backdrop_path));
  };

  useEffect(() => {
    async function fetchData() {
      const dico = await getDictionary(locale);
      setDictionary(dico);
    }
    fetchData();
  }, [locale]);

  const handleFocus = () => {
    setHasFocus(true);
    setIsOpen(true);
  };

  return (
    <div className={styles.container}>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        placeholder={dictionary && dictionary.movieSearch.placeholder}
        onChange={(e) => updateMovieSearch(e.target.value)}
        onBlurCapture={() => setHasFocus(false)}
        onFocus={handleFocus}
        className={styles.input}
      />
      {movieResults.length > 0 && (
        <MovieSearcResults
          movieResults={movieResults}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default MovieSearch;
