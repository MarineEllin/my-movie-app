"use client";
import { getDictionary } from "@/utils/dictionaries";
import { useSelectedLayoutSegment, useParams, notFound } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryTitle = ({ genres, locale }) => {
  const [dictionary, setDictionary] = useState();
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const dico = await getDictionary(locale);
      setDictionary(dico);
    }
    fetchData();
  }, [locale]);

  const getSidebarTitle = () => {
    if (!segment) {
      return "Films";
    }
    const genre = genres.find((genre) => genre.id === Number(id));
    if (!genre) {
      return notFound();
    }
    return genre.name;
  };

  const title = getSidebarTitle();

  return (
    <div>
      <h1>
        {dictionary && dictionary.category.preTitle} {title}
      </h1>
    </div>
  );
};

export default CategoryTitle;
