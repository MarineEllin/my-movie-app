import { useEffect, useState } from "react";
import useCurrentLanguage from "./useCurrentLanguage";
import { getDictionary } from "@/utils/dictionaries";

const useCurrentDictionary = () => {
  const [dictionary, setDictionary] = useState();
  const locale = useCurrentLanguage();

  useEffect(() => {
    async function fetchData() {
      const dico = await getDictionary(locale);
      setDictionary(dico);
    }
    fetchData();
  }, [locale]);

  return dictionary;
};

export default useCurrentDictionary;
