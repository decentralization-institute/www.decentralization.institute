import Link from "next/link";
import styles from "./Wordmark.module.css";

/** The "decentralization institute" text logo, linking home. */
export default function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className={styles.link}>
      <span className={inverted ? `${styles.text} ${styles.inverted}` : styles.text}>
        decentralization institute
      </span>
    </Link>
  );
}
