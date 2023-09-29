import React from "react";
import styles from "./page.module.scss";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <p>Vous êtes connecté</p>
      <LogoutBtn />
    </div>
  );
};

export default ProfilePage;
