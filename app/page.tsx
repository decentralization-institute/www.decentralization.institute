import SiteLayout from "@/components/SiteLayout";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <SiteLayout>
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-ring.svg"
              alt="decentralization institute"
              width={480}
              height={480}
            />
          </div>
          <div className={styles.mission}>
            <p>
              The Decentralization Institute is a non-profit research and
              educational organization. The institute brings together computer
              science, engineering, law, and economics researchers to work on
              pushing the frontier of decentralization technologies. Our mission
              is to embody equitable ownership, shared governance, and human
              rights into the software that impacts everyday lives. Beyond our
              research mission, the institute also provides academic classes,
              MOOCs, workshops, and conferences for the general community.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
