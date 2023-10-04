"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./SignupForm.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import Link from "next/link";
import useCurrentDictionary from "@/hooks/useCurrentDictionary";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorCreatingAccount from "./ErrorCreatingAccount/ErrorCreatingAccount";

const SignupForm = () => {
  const { status } = useSession();
  const router = useRouter();
  const locale = useCurrentLanguage();
  const dictionary = useCurrentDictionary(locale);
  console.log(dictionary);
  const [errorCreatingAccount, setErrorCreatingAccount] = useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("*Email non valide / Email not valid")
      .required("*Requis / Required"),
    password: yup
      .string()
      .min(8, "*Min 8")
      .max(32, "*Max 32")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!*()0123456789]).{8,}$/,
        "Non valide / not valid"
      )
      .required("*Requis / Required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }).then((response) => {
      if (response.ok) {
        router.push(`/${locale}/signIn`);
      } else {
        setErrorCreatingAccount(true);
      }
    });
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/user/profile");
    }
  }, [status, router]);

  return (
    <div className={styles.formContainer}>
      <h1>{dictionary && dictionary.log.signup}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
        <input
          type="text"
          name="email"
          id=""
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className={styles.error}>{errors.email?.message}</p>
        )}
        <input
          type="password"
          name="password"
          placeholder={dictionary && dictionary.log.password}
          {...register("password")}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password?.message}</p>
        )}
        <p className={styles.passwordRegex}>
          {dictionary && dictionary.log.passwordAndRegex}
        </p>
        <button type="submit">{dictionary && dictionary.log.signup}</button>
      </form>
      <Link href={`/${locale}/signIn`}>
        <p>{dictionary && dictionary.log.toLogin}</p>
      </Link>
      {errorCreatingAccount && (
        <ErrorCreatingAccount
          setErrorCreatingAccount={setErrorCreatingAccount}
        />
      )}
    </div>
  );
};

export default SignupForm;
