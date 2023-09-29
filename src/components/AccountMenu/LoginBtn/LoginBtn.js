import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import React from "react";

const LoginBtn = () => {
  return (
    <div className={styles.logoutBtn} onClick={signIn()}>
      <FontAwesomeIcon icon={faRightToBracket} />
    </div>
  );
};

export default LoginBtn;
