import React from "react";
import SearchResults from "./(search)/SearchResults";

const MoviesPage = ({ searchParams, params: { locale } }) => {
  return (
    <div>
      <div>C'est la Movie page</div>
      <SearchResults searchParams={searchParams} locale={locale} />
    </div>
  );
};

export default MoviesPage;
