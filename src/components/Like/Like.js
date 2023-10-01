"use client";
import styles from "./Like.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { signIn, useSession } from "next-auth/react";

const Like = ({ mediaId }) => {
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

  return (
    <FontAwesomeIcon
      icon={faHeart}
      className={styles.likeIcon}
      onClick={handleLikeClick}
    />
  );
};

export default Like;
