import Genres from "@/components/Genres/Genres";
import styles from "./page.module.scss";
import Popular from "@/components/Popular/Popular";
import { Constants } from "@/constants/Constants";

export const revalidate = Constants.REVALIDATE_POPULAR_MOVIE_FREQUENCY;

const Home = async ({ params: { locale } }) => {
  return (
    <div className={styles.main}>
      <Genres locale={locale} />
      <Popular locale={locale} />
    </div>
  );
};

export default Home;
