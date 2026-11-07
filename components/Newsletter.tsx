import styles from "./Newsletter.module.css";

/** "Stay up to date" block with the embedded Substack signup form. */
export default function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.image}
          src="/images/newsletter.png"
          alt=""
          width={200}
          height={160}
        />
        <h2 className={styles.title}>Stay up to date</h2>
        <p className={styles.subtitle}>Subscribe to our mailing list for updates</p>
      </div>
      <div className={styles.formRow}>
        <iframe
          className={styles.form}
          src="https://decentralizationinstitute.substack.com/embed"
          title="Subscribe to the Decentralization Institute newsletter"
          width={400}
          height={150}
        />
      </div>
    </section>
  );
}
