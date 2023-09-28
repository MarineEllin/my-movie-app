"use client";
import { availableLocales } from "@/utils/i18n";
import styles from "./LanguageSelector.module.scss";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const LanguageSelector = () => {
  const pathname = usePathname();
  const currentLanguage = useCurrentLanguage();

  const router = useRouter();

  const changePathname = (e) => {
    const locale = e.target.value;
    const newPathname = `/${locale}${pathname.substring(
      currentLanguage.length + 1,
      pathname.length
    )}`;
    router.push(newPathname);
  };

  function getStyle(locale) {
    if (locale === currentLanguage) {
      return styles.activeLanguage;
    }
    return styles.otherLanguage;
  }
  return (
    <div className={styles.container}>
      {availableLocales.map((locale) => (
        <button
          value={locale}
          className={getStyle(locale)}
          key={locale}
          onClick={changePathname}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
