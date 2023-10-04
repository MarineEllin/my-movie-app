import useCurrentDictionary from "@/hooks/useCurrentDictionary";
import React from "react";
import styles from "./ErrorCreatingAccount.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import Link from "next/link";

const ErrorCreatingAccount = ({ setErrorCreatingAccount }) => {
  const locale = useCurrentLanguage();
  const dictionary = useCurrentDictionary(locale);
  return (
    <div className={styles.container}>
      <div
        className={styles.close}
        onClick={() => setErrorCreatingAccount(false)}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </div>
      <h1 className={styles.content}>
        {dictionary && dictionary.log.errorCreatingAccount}
      </h1>
      <Link href={`/${locale}/signIn`}>
        <p>{dictionary && dictionary.log.login}</p>
      </Link>
    </div>
  );
};

export default ErrorCreatingAccount;
