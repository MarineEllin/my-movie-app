"use client";
import styles from "./AccountMenu.module.scss";

import { useSession } from "next-auth/react";
import LogoutBtn from "./LogoutBtn/LogoutBtn";
import LoginBtn from "./LoginBtn/LoginBtn";
import ProfileBtn from "./ProfileBtn/ProfileBtn";
import SignupBtn from "./SignupBtn/SignupBtn";

const AccountMenu = ({ locale, setDisplayMenuFalse }) => {
  const { status } = useSession();
  return (
    <div className={styles.menuContainer}>
      <div>
        {status === "authenticated" ? (
          <ProfileBtn
            locale={locale}
            setDisplayMenuFalse={setDisplayMenuFalse}
          />
        ) : (
          <SignupBtn
            locale={locale}
            setDisplayMenuFalse={setDisplayMenuFalse}
          />
        )}
      </div>
      <div>
        {status === "authenticated" ? (
          <LogoutBtn locale={locale} />
        ) : (
          <LoginBtn locale={locale} />
        )}
      </div>
      <div className={styles.bubble}></div>
    </div>
  );
};

export default AccountMenu;
