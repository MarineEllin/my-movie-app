import { getMovieByPath } from "@/utils/movieClient";
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./ActorDetails.module.scss";
import ActorsFilmography from "./ActorsFilmography/ActorsFilmography";
import { getDictionary } from "@/utils/dictionaries";

const ActorDetails = async ({ actorId, locale }) => {
  const person = await getMovieByPath(`/person/${actorId}`, [], locale);
  if (!person.name) {
    return notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <div className={styles.container}>
      <Image
        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${person.profile_path}`}
        alt={person.name}
        width={350}
        height={500}
      />
      <div>
        <h2>
          {person.name} {person.also_know_as && `(${person.also_know_as})`}
        </h2>
        {person.biography ? (
          <div className={styles.biography}>{person.biography}</div>
        ) : (
          <div className={styles.details}>
            <p>
              {dictionary.actor.birthdate} :{" "}
              {new Date(person.birthday).toLocaleDateString("fr-FR")}
            </p>
            <p>
              {dictionary.actor.place_birth} : {person.place_of_birth}
            </p>
            {person.deathday && (
              <p>{new Date(person.deathday).toLocaleDateString("fr-FR")}</p>
            )}
          </div>
        )}
        <Suspense fallback={<p>Chargement...</p>}>
          <ActorsFilmography actorId={actorId} locale={locale} />
        </Suspense>
      </div>
    </div>
  );
};

export default ActorDetails;
