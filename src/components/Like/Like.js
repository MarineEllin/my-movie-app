"use client";
import styles from "./Like.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Like = ({ mediaId, movieLikes }) => {
  const router = useRouter();
  const [style, setStyle] = useState();
  const { status } = useSession();

  const handleLikeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (status !== "authenticated" || movieLikes == null) {
      signIn();
    } else {
      if (
        !movieLikes.map((movie) => movie.movieId).includes(mediaId.toString())
      ) {
        fetch(`/api/like/${mediaId}`, {
          method: "POST",
        });
      } else {
        fetch(`/api/dislike/${mediaId}`, {
          method: "PATCH",
        });
      }
      router.refresh();
    }
  };

  useEffect(() => {
    if (status != "authenticated" || !movieLikes) {
      setStyle(styles.likeIcon);
    } else if (
      movieLikes.map((movie) => movie.movieId).includes(mediaId.toString())
    ) {
      setStyle(styles.likeIconActive);
    } else {
      setStyle(styles.likeIcon);
    }
  }, [movieLikes, setStyle, status, mediaId]);

  return (
    <FontAwesomeIcon
      icon={faHeart}
      className={style}
      onClick={handleLikeClick}
    />
  );
};

export default Like;
