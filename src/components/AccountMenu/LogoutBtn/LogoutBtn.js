"use client";
import { signOut } from "next-auth/react";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LogoutBtn.module.scss";
import useCurrentDictionary from "@/hooks/useCurrentDictionary";

const LogoutBtn = () => {
  const dictionary = useCurrentDictionary();
  return (
    <div
      className={styles.logoutBtn}
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <FontAwesomeIcon icon={faPowerOff} />
      <span>{dictionary && dictionary.log.logout}</span>
    </div>
  );
};

export default LogoutBtn;
