"use client";
import styles from "./Account.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AccountMenu from "@/components/AccountMenu/AccountMenu";
import { useClickAway } from "@uidotdev/usehooks";

const Account = ({ locale }) => {
  const [displayAccountMenu, setDisplayAccountMenu] = useState();
  const ref = useClickAway(() => {
    setDisplayAccountMenu(false);
  });

  const setDisplayMenuFalse = () => {
    setDisplayAccountMenu(false);
  };

  return (
    <div ref={ref}>
      <div onClick={() => setDisplayAccountMenu(!displayAccountMenu)}>
        <FontAwesomeIcon icon={faUser} className={styles.accountIcon} />
      </div>

      {displayAccountMenu && (
        <AccountMenu
          locale={locale}
          setDisplayMenuFalse={setDisplayMenuFalse}
        />
      )}
    </div>
  );
};

export default Account;
