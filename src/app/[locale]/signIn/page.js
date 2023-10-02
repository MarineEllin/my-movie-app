"use client";
import { useRef } from "react";
import styles from "./page.module.scss";
import useCurrentDictionary from "@/hooks/useCurrentDictionary";
import { signIn } from "next-auth/react";
import Link from "next/link";

const LoginPage = ({ params: { locale } }) => {
  const dictionary = useCurrentDictionary(locale);
  const email = useRef("");
  const password = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="containerCenter">
      <div className={styles.formContainer}>
        <h1>{dictionary && dictionary.log.login}</h1>
        <div className={styles.formContent}>
          <input
            type="text"
            name="email"
            id=""
            placeholder="Email"
            onChange={(e) => (email.current = e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder={dictionary && dictionary.log.password}
            onChange={(e) => (password.current = e.target.value)}
          />
          <button onClick={onSubmit}>
            {dictionary && dictionary.log.login}
          </button>
        </div>
        <Link href={`/${locale}/signup`}>
          <p>{dictionary && dictionary.log.toSignup}</p>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
