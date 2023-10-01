import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "./ProfileBtn.module.scss";
import useCurrentDictionary from "@/hooks/useCurrentDictionary";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";

const ProfileBtn = ({ setDisplayMenuFalse }) => {
  const dictionary = useCurrentDictionary();
  const locale = useCurrentLanguage();
  return (
    <div className={styles.profileBtn} onClick={setDisplayMenuFalse}>
      <Link href={`/${locale}/user/profile`}>
        <FontAwesomeIcon icon={faIdCard} />
        <span>{dictionary && dictionary.log.profile}</span>
      </Link>
    </div>
  );
};

export default ProfileBtn;
