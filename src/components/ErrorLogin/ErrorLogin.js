import React from "react";
import styles from "./ErrorLogin.module.scss";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import useCurrentDictionary from "@/hooks/useCurrentDictionary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const ErrorLogin = ({ setErrorLogin }) => {
  const locale = useCurrentLanguage();
  const dictionary = useCurrentDictionary(locale);
  return (
    <div className={styles.container}>
      <div className={styles.close} onClick={() => setErrorLogin(false)}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </div>
      <h1 className={styles.content}>
        {dictionary && dictionary.log.errorLogin}
      </h1>
      <Link href={`/${locale}/signIn`}>
        <p>{dictionary && dictionary.log.signup}</p>
      </Link>
    </div>
  );
};

export default ErrorLogin;
