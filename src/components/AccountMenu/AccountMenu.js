"use client";
import styles from "./AccountMenu.module.scss";

import { useSession } from "next-auth/react";
import LogoutBtn from "./LogoutBtn/LogoutBtn";
import LoginBtn from "./LoginBtn/LoginBtn";
import ProfileBtn from "./ProfileBtn/ProfileBtn";
import SignupBtn from "./SignupBtn/SignupBtn";

const AccountMenu = ({ locale }) => {
  const { status } = useSession();
  return (
    <div className={styles.menuContainer}>
      <div>
        {status === "authenticated" ? (
          <ProfileBtn locale={locale} />
        ) : (
          <SignupBtn locale={locale} />
        )}
      </div>
      <div>
        {status === "authenticated" ? (
          <LogoutBtn locale={locale} />
        ) : (
          <LoginBtn locale={locale} />
        )}
      </div>
    </div>
  );
};

export default AccountMenu;
