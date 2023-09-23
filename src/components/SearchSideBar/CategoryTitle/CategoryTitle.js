"use client";
import { useSelectedLayoutSegment, useParams, notFound } from "next/navigation";

const CategoryTitle = ({ genres }) => {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();

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
      <h1>Tous les films de la catégorie : {title}</h1>
    </div>
  );
};

export default CategoryTitle;
