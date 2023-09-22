import React from 'react';

const MovieIdPage = ({params}) => {
    return (
        <div>
            <h2>Movie page with id: {params.id} </h2>
        </div>
    );
};

export default MovieIdPage;