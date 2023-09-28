import React from "react";
import SearchResults from "./(search)/SearchResults";

const MoviesPage = ({ searchParams, params: { locale } }) => {
  return (
    <div>
      <SearchResults searchParams={searchParams} locale={locale} />
    </div>
  );
};

export default MoviesPage;
