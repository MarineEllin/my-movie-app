import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TrendingPeople.module.scss";

const TrendingPeople = async () => {
  const { results } = await getMovieByPath(`/trending/person/day`);
  return (
    <div className={styles.container}>
      {results
        .slice(0, 8)
        .filter((people) => people.profile_path && people.name)
        .map((people) => (
          <div key={people.id}>
            <Link href={`/actors/${people.id}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${people.profile_path}`}
                width={120}
                height={120}
                alt={people.name}
              />
              <p>{people.name}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TrendingPeople;
