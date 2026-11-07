import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Partners and Sponsors" };

const PLACEHOLDER =
  "Vitae sed sem a justo mauris potenti a primis vivamus justo tempor viverra adipiscing convallis fusce odio condimentum mi parturient ultricies.";

export default function PartnersPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Partners and Sponsors"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        image="/images/hero-partners.png"
        imageHeight={380}
      />
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <div className={styles.content}>
            <p>{PLACEHOLDER}</p>
            <p>{PLACEHOLDER}</p>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
