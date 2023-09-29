"use client";

import { useSession } from "next-auth/react";
import LogoutBtn from "./LogoutBtn/LogoutBtn";
import LoginBtn from "./LoginBtn/LoginBtn";

const AccountMenu = () => {
  const { status } = useSession();
  return <div>{status === "authenticated" ? <LogoutBtn /> : <LoginBtn />}</div>;
};

export default AccountMenu;
