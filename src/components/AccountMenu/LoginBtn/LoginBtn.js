"use client";

import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./LoginBtn.module.scss";
import Link from "next/link";
import { signIn } from "next-auth/react";
import useCurrentDictionary from "@/hooks/useCurrentDictionary";

const LoginBtn = () => {
  const dictionary = useCurrentDictionary();
  const handleClickLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    signIn();
  };

  return (
    <div className={styles.loginBtn} onClick={handleClickLogin}>
      <FontAwesomeIcon icon={faRightToBracket} />
      <span>{dictionary && dictionary.log.login}</span>
    </div>
  );
};

export default LoginBtn;
