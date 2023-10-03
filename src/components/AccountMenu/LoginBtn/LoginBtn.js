"use client";

import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./LoginBtn.module.scss";
import Link from "next/link";
import { signIn } from "next-auth/react";
import useCurrentDictionary from "@/hooks/useCurrentDictionary";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";

const LoginBtn = () => {
  const dictionary = useCurrentDictionary();
  const locale = useCurrentLanguage();

  return (
    <div className={styles.loginBtn}>
      <Link href={`/${locale}/signIn`}>
        <FontAwesomeIcon icon={faRightToBracket} />
        <span>{dictionary && dictionary.log.login}</span>
      </Link>
    </div>
  );
};

export default LoginBtn;
