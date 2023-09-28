import { defaultLocale } from "@/utils/i18n";
import { useParams } from "next/navigation";

const useCurrentLanguage = () => {
  const params = useParams();
  return params.locale || defaultLocale;
};

export default useCurrentLanguage;
