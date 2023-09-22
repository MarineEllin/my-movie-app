import React from 'react';
import SearchResults from '../../SearchResults';

const GenreIdPage = ({params, searchParams}) => {
   
    return (
        <div>
            <SearchResults searchParams={searchParams} genreId={params.id}/>
        </div>
    );
};

export default GenreIdPage;