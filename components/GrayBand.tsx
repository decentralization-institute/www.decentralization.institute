import styles from "./GrayBand.module.css";

/** Light gray full-width band that sits directly under a page hero. */
export function GrayBand({ children }: { children: React.ReactNode }) {
  return <section className={styles.band}>{children}</section>;
}

/** Centered one-line note, e.g. "This page is work in progress...". */
export function BandNote({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.note}>
      <p>{children}</p>
    </div>
  );
}

/** Centered content area inside a band, capped at the hero width. */
export function BandContent({ children }: { children?: React.ReactNode }) {
  return <div className={styles.content}>{children}</div>;
}
