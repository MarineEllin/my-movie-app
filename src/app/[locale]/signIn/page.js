"use client";
import { useRef, useState } from "react";
import styles from "./page.module.scss";
import useCurrentDictionary from "@/hooks/useCurrentDictionary";
import { signIn } from "next-auth/react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import ErrorLogin from "@/components/ErrorLogin/ErrorLogin";

const LoginPage = ({ params: { locale } }) => {
  const router = useRouter();
  const dictionary = useCurrentDictionary(locale);
  const email = useRef("");
  const password = useRef("");
  const [errorLogin, setErrorLogin] = useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("*Email non valide / Email not valid")
      .required("*Requis / Required"),
    password: yup.string().required("*Requis / Required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((response) => {
      if (response.error === null) {
        router.push(`/${locale}`);
      } else {
        setErrorLogin(true);
      }
    });
  };

  return (
    <div className="containerCenter">
      <div className={styles.formContainer}>
        <h1>{dictionary && dictionary.log.login}</h1>
        <form className={styles.formContent} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="email"
            id=""
            placeholder="Email"
            onChange={(e) => (email.current = e.target.value)}
            {...register("email")}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email?.message}</p>
          )}
          <input
            type="password"
            name="password"
            placeholder={dictionary && dictionary.log.password}
            onChange={(e) => (password.current = e.target.value)}
            {...register("password")}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password?.message}</p>
          )}
          <button type="submit">{dictionary && dictionary.log.login}</button>
        </form>
        <Link href={`/${locale}/signup`}>
          <p>{dictionary && dictionary.log.toSignup}</p>
        </Link>
        {errorLogin && <ErrorLogin setErrorLogin={setErrorLogin} />}
      </div>
    </div>
  );
};

export default LoginPage;
