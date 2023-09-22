"use client";
import {useSelectedLayoutSegment, useParams, notFound  } from "next/navigation";
import styles from "./SearchSideBar.module.scss";
import Form from "./Form/Form";

const SearchSideBar = ({genres}) => {
    const selectedSegment = useSelectedLayoutSegment();
    const {id} = useParams();
    const getSideBarTitle = () => {
        if(!selectedSegment) {
            return "Film";
        } else {    
            const genre = genres.find((genre) => genre.id === Number(id));
            if(!genre) {
                return notFound();
            } else {
                return genre.name;
            }
        }
    }

    const title = getSideBarTitle();

    return (
        <div className={styles.sidebar}>
            <h1>Tous les films de la catégorie : {title}</h1>
            <Form/>
        </div>
    );
};

export default SearchSideBar;