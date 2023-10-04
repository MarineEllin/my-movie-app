"use client";
import { signOut } from "next-auth/react";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LogoutBtn.module.scss";
import useCurrentDictionary from "@/hooks/useCurrentDictionary";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const router = useRouter();
  const locale = useCurrentLanguage();
  const dictionary = useCurrentDictionary(locale);

  const handleLogout = () => {
    signOut();
    router.push(`/${locale}`);
  };
  return (
    <div className={styles.logoutBtn} onClick={handleLogout}>
      <FontAwesomeIcon icon={faPowerOff} />
      <span>{dictionary && dictionary.log.logout}</span>
    </div>
  );
};

export default LogoutBtn;
