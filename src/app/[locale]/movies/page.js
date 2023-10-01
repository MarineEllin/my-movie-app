import React from "react";
import SearchResults from "./(search)/SearchResults";
import { getDictionary } from "@/utils/dictionaries";

const MoviesPage = async ({ searchParams, params: { locale } }) => {
  const dictionary = await getDictionary(locale);
  return (
    <div className="container">
      <h1>{dictionary && dictionary.allMovies.movies}</h1>
      <SearchResults searchParams={searchParams} locale={locale} />
    </div>
  );
};

export default MoviesPage;
