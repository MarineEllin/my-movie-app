import React from 'react';
import styles from "./SearchResults.module.scss";
import { getMovieByPath } from '@/utils/movieClient';

const SearchResults = async({searchParams, genreId}) => {

    const response = await getMovieByPath("/discover/movie", [
        {key: "sort_by", value: ""},
            {
                key: "release_date.gte", value: "",
            },
            {
                key: "release_date.lte", value: "",
            },
            {
                key: "", value:""
            }
    ])

    return (
        <div className={styles.result}>
            
        </div>
    );
};

export default SearchResults;