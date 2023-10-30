"use client";
import styles from "./Like.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Like = ({ mediaId, movieLikesList }) => {
  const router = useRouter();
  const [style, setStyle] = useState();
  const { data: session, status } = useSession();
  const [movieLikes, setMovieLikes] = useState(movieLikesList);

  useEffect(() => {
    if (status === "authenticated" && movieLikes === undefined) {
      async function fetchMovieLikes() {
        const res = await fetch(`/api/getMovieLikes`, {
          method: "GET",
        });

        const movieLikesFromPrisma = await res.json();
        setMovieLikes(movieLikesFromPrisma);
      }
      fetchMovieLikes();
    }
  }, [status]);

  const handleLikeClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (status !== "authenticated") {
      signIn();
    } else {
      if (
        !movieLikes.map((movie) => movie.movieId).includes(mediaId.toString())
      ) {
        const res = await fetch(`/api/like/${mediaId}`, {
          method: "POST",
        });
        const movieLikesFetch = await res.json();
        setMovieLikes(movieLikesFetch);
      } else {
        const res = await fetch(`/api/dislike/${mediaId}`, {
          method: "PATCH",
        });
        const movieLikesFetch = await res.json();
        setMovieLikes(movieLikesFetch);
      }
    }
    router.refresh();
  };

  useEffect(() => {
    if (status === "authenticated" && movieLikes !== undefined) {
      if (
        movieLikes.map((movie) => movie.movieId).includes(mediaId.toString())
      ) {
        setStyle(styles.likeIconActive);
      } else {
        setStyle(styles.likeIcon);
      }
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
