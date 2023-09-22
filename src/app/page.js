import Genres from '@/components/Genres/Genres';
import styles from './page.module.scss';
import Popular from '@/components/Popular/Popular';

export default function Home() {
  return (
    <div className={styles.main}>
      <Genres/>
      <Popular/>
    </div>
  )
}
