"use client";
import styles from "./Like.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { signIn, useSession } from "next-auth/react";

const Like = ({ mediaId, movieLikesIdArr }) => {
  const { data: session } = useSession();
  const handleLikeClick = (e) => {
    e.preventDefault();
    if (!session) {
      signIn();
    }
    fetch(`/api/like/${mediaId}`, {
      method: "POST",
    });
  };

  const getIconStyle = (movieLikesIdArr) => {
    if (movieLikesIdArr.includes(mediaId.toString())) {
      return styles.likeIconActive;
    }
    return styles.likeIcon;
  };

  return (
    <FontAwesomeIcon
      icon={faHeart}
      className={getIconStyle(movieLikesIdArr)}
      onClick={handleLikeClick}
    />
  );
};

export default Like;
