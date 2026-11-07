import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import ValueProposition from "@/components/ValueProposition";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "About us" };

const VALUE_TITLE = "Some value proposition of your service.";
const VALUE_TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        title="About us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        image="/images/hero-events.png"
      />
      <section className={styles.why}>
        <div className={styles.whyContent}>
          <h2 className={styles.heading}>WHY CHOOSE US</h2>
          <p className={styles.intro}>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            }
          </p>
          <ValueProposition
            title={VALUE_TITLE}
            text={VALUE_TEXT}
            image="/images/about/value-1.jpg"
            imagePosition="right"
          />
          <ValueProposition
            title={VALUE_TITLE}
            text={VALUE_TEXT}
            image="/images/about/value-2.jpg"
            imagePosition="left"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
