import React from "react";
import SearchResults from "../../SearchResults";

const GenreIdPage = ({ params: { id, locale }, searchParams }) => {
  return (
    <div>
      <SearchResults searchParams={searchParams} genreId={id} locale={locale} />
    </div>
  );
};

export default GenreIdPage;
