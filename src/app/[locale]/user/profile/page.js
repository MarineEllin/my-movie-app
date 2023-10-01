import React from "react";
import styles from "./page.module.scss";
import { getServerSession } from "next-auth";
import { getMovieLikes } from "@/utils/movieClient";
import MediaCard from "@/components/MediaCard/MediaCard";
import { getDictionary } from "@/utils/dictionaries";

const ProfilePage = async ({ params: { locale } }) => {
  const dictionary = await getDictionary(locale);
  const { user: userSession } = await getServerSession();

  const { movieLikes } = await prisma.user.findFirst({
    where: { email: userSession.email },
    include: {
      movieLikes: true,
    },
  });

  const movies = await getMovieLikes(
    movieLikes.map((movie) => movie.movieId),
    locale
  );

  return (
    <div className="container">
      <h1>{dictionary && dictionary.profile.welcome}</h1>
      <h2>{dictionary && dictionary.profile.movieLikes}</h2>
      {!movies.length && <p>{dictionary && dictionary.profile.noMovieLikes}</p>}

      <div className={styles.mediacardContainer}>
        {movies.map((movie) => (
          <MediaCard
            key={movie.id}
            media={movie}
            locale={locale}
            movieLikes={movieLikes}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
