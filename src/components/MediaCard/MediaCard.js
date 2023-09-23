import React from "react";
import styles from "./MediaCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const MediaCard = ({ media }) => {
  return (
    <div className={styles.card}>
      <Link href={`/movies/${media.id}`}>
        <div className={styles.image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${media.poster_path}`}
            alt={media.title}
            fill
            sizes="100%"
          />
        </div>
        <div className={styles.content}>
          <p className={styles.vote}>{media.vote_average}</p>
          <h2>{media.title}</h2>
          <p>Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
