import Image from "next/image";
import Link from "next/link";
import styles from "./MovieSearchResults.module.scss";
import { useClickAway } from "@uidotdev/usehooks";

const MovieSearchResults = ({ movieResults, isOpen, setIsOpen }) => {
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  if (isOpen) {
    return (
      <div className={styles.searchResults} ref={ref}>
        {movieResults.map((movie) => (
          <div key={movie.id} onClick={() => setIsOpen(false)}>
            <Link
              href={`/movies/${movie.id}`}
              onMouseDown={(e) => e.preventDefault()}
            >
              <Image
                width={90}
                height={50}
                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
};

export default MovieSearchResults;
