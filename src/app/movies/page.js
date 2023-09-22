import React from 'react';
import SearchResults from './(search)/SearchResults';

const MoviesPage = ({searchParams}) => {
    return (
        <div>
            <SearchResults searchParams={searchParams}/>
        </div>
    );
};

export default MoviesPage;