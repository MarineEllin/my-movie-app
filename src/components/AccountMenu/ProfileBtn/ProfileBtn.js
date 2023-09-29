import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "./ProfileBtn.module.scss";
import useCurrentDictionary from "@/hooks/useCurrentDictionary";

const ProfileBtn = () => {
  const dictionary = useCurrentDictionary();
  return (
    <div className={styles.profileBtn}>
      <Link href={"/user/profile"}>
        <FontAwesomeIcon icon={faIdCard} />
        <span>{dictionary && dictionary.log.profile}</span>
      </Link>
    </div>
  );
};

export default ProfileBtn;
