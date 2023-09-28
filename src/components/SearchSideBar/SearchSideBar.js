"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./SearchSideBar.module.scss";
import { useRouter, usePathname } from "next/navigation";
import { getDictionary } from "@/utils/dictionaries";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";

const SearchSideBar = ({ locale }) => {
  const [dictionary, setDictionary] = useState();
  console.log(dictionary);
  const router = useRouter();
  const pathname = usePathname();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams();
    searchParams.append("sort_by", form.get("sort"));
    searchParams.append("release_date.gte", form.get("fromDate"));
    searchParams.append("release_date.lte", form.get("toDate"));

    router.push(`${pathname}?${searchParams.toString()}`);
  };
  useEffect(() => {
    async function fetchData() {
      const dico = await getDictionary(locale);
      setDictionary(dico);
    }
    fetchData();
  }, [locale]);

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2>{dictionary && dictionary.searchSideBar.title}</h2>
      <div className={styles.date}>
        <h3>{dictionary && dictionary.searchSideBar.releaseDate}</h3>
        <div>
          <p>{dictionary && dictionary.searchSideBar.from}</p>
          <input type="date" name="fromDate" />
        </div>
        <div>
          <p>{dictionary && dictionary.searchSideBar.to}</p>
          <input
            type="date"
            name="toDate"
            defaultValue={new Date().toISOString().substring(0, 10)}
          />
        </div>
      </div>
      <div className={styles.sort}>
        <h3>{dictionary && dictionary.searchSideBar.sortBy}</h3>
        <select name="sort">
          <option value="popularity.desc">Popularité</option>
          <option value="vote_average.desc">Notes</option>
          <option value="cote_count.desc">Nombre de notes</option>
        </select>
      </div>
      <button
        type="submit"
        defaultValue="Rechercher"
        className={styles.submitBtn}
      >
        {dictionary && dictionary.searchSideBar.search}
      </button>
    </form>
  );
};

export default SearchSideBar;
