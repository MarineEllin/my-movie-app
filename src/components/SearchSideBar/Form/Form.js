"use client";
import styles from "./Form.module.scss";
import {useRouter, usePathname} from "next/navigation";

const Form = () => {

    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const searchParams = new URLSearchParams();
        searchParams.append("sort_by", form.get("sort"));
        searchParams.append("release_date.gte", form.get("fromDate"));
        searchParams.append("release_date.lte", form.get("toDate"));
        console.log(searchParams);
    
        router.push(`${pathname}?${searchParams.toString()}`);
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <h2>Filtrer</h2>
                <div className={styles.date}>
                    <h3>Date de sortie</h3>
                    <div>
                        <p>Du</p>
                        <input type="date" name="fromDate"/> 
                    </div>
                    <div>
                        <p>Au</p>
                        <input type="date" name="toDate" defaultValue={new Date().toISOString().substring(0, 10)}/>
                    </div>
                </div>
                <div className={styles.sort}>
                    <h3>Trier par</h3>
                    <select name="sort">
                        <option value="popularity.desc">Popularité</option>
                        <option value="vote_average.desc">Notes</option>
                        <option value="cote_count.desc">Nombre de notes</option>
                    </select>
                </div>        
            <input type="submit" defaultValue="Rechercher" className={styles.submitBtn}/>
        </form>
    );
};

export default Form;