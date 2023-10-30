import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../MediaCard/MediaCard";
import styles from "./Popular.module.scss";
import { getDictionary } from "@/utils/dictionaries";
import { getServerSession } from "next-auth";

const Popular = async ({ locale }) => {
  const { results } = await getMovieByPath("/discover/movie", [], locale);
  const dictionary = await getDictionary(locale);
  const popularMovies = results.slice(0, 120);
  let movieLikesList = [];
  const session = await getServerSession();

  if (session != null) {
    const { movieLikes } = await prisma.user.findFirst({
      where: { email: session.user.email },
      include: {
        movieLikes: true,
      },
    });
    movieLikesList = movieLikes;
  }

  return (
    <div className={styles.popularContainer}>
      <h1>{dictionary.popular.title}</h1>
      <div className={styles.movieContainer}>
        {popularMovies.map((movie) => (
          <MediaCard
            key={movie.id}
            media={movie}
            locale={locale}
            movieLikesList={movieLikesList}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
