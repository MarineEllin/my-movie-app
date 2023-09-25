import { getMovieByPath } from "@/utils/movieClient";
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./ActorDetails.module.scss";
import ActorsFilmography from "./ActorsFilmography/ActorsFilmography";

const ActorDetails = async ({ actorId }) => {
  const person = await getMovieByPath(`/person/${actorId}`);
  if (!person.name) {
    return notFound();
  }
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
              Date de naissance :{" "}
              {new Date(person.birthday).toLocaleDateString("fr-FR")}
            </p>
            <p>Lieu de naissance : {person.place_of_birth}</p>
            {person.deathday && (
              <p>{new Date(person.deathday).toLocaleDateString("fr-FR")}</p>
            )}
          </div>
        )}
        <Suspense fallback={<p>Chargement...</p>}>
          <ActorsFilmography actorId={actorId} />
        </Suspense>
      </div>
    </div>
  );
};

export default ActorDetails;
