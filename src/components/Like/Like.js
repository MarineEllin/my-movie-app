"use client";
import styles from "./Like.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Like = ({ mediaId, movieLikes }) => {
  const [style, setStyle] = useState(styles.likeIcon);
  const [likedListId, setLikedListId] = useState();
  const { status } = useSession();

  const handleLikeClick = (e) => {
    e.preventDefault();
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
    }
  };

  return (
    <FontAwesomeIcon
      icon={faHeart}
      className={style}
      onClick={handleLikeClick}
    />
  );
};

export default Like;
