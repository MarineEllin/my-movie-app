import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "./SignupBtn.module.scss";
import useCurrentDictionary from "@/hooks/useCurrentDictionary";

const SignupBtn = ({ locale, setDisplayMenuFalse }) => {
  const dictionary = useCurrentDictionary();
  return (
    <div className={styles.signupBtn} onClick={setDisplayMenuFalse}>
      <Link href={`${locale}/signup`}>
        <FontAwesomeIcon icon={faRightToBracket} />
        <span>{dictionary && dictionary.log.signup}</span>
      </Link>
    </div>
  );
};

export default SignupBtn;
