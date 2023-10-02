"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./SignupForm.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import { getDictionary } from "@/utils/dictionaries";
import Link from "next/link";

const SignupForm = () => {
  const { status } = useSession();
  const router = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }).then((response) => {
      if (response.ok) {
        signIn();
      }
    });
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/user/profile");
    }
  }, [status, router]);

  const [dictionary, setDictionary] = useState();
  const locale = useCurrentLanguage();

  useEffect(() => {
    async function fetchData() {
      const dico = await getDictionary(locale);
      setDictionary(dico);
    }
    fetchData();
  }, [locale]);

  return (
    <div className={styles.formContainer}>
      <h1>{dictionary && dictionary.log.signup}</h1>
      <form onSubmit={handleFormSubmit} className={styles.formContent}>
        <input type="text" name="email" id="" placeholder="Email" />
        <input
          type="password"
          name="password"
          placeholder={dictionary && dictionary.log.password}
        />
        <button type="submit">{dictionary && dictionary.log.signup}</button>
      </form>
      <Link href={`/${locale}/signIn`}>
        <p>{dictionary && dictionary.log.toLogin}</p>
      </Link>
    </div>
  );
};

export default SignupForm;
