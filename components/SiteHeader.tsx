import Wordmark from "./Wordmark";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Wordmark />
      </div>
    </header>
  );
}
