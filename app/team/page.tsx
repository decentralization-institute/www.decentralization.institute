import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <SiteLayout newsletter={false}>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2>Meet our community of researchers, teachers, and mentors.</h2>
            <p className={styles.lead}>
              We are building an interdisciplinary group to shape the future of
              decentralization.
            </p>
          </div>
        </section>
        <section className={styles.people}>
          <div className={styles.row}>
            <h3>Directors</h3>
          </div>
          <div className={styles.row}>
            <p>Page is work in progress...</p>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
