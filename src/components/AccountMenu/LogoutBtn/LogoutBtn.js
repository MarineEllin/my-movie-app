"use client";
import { signOut } from "next-auth/react";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LogoutBtn.module.scss";

const LogoutBtn = () => {
  return (
    <div
      className={styles.logoutBtn}
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <FontAwesomeIcon icon={faPowerOff} />
    </div>
  );
};

export default LogoutBtn;
