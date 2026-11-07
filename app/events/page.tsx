import type { Metadata } from "next";
import EventCard, { type EventCardProps } from "@/components/EventCard";
import { BandContent, GrayBand } from "@/components/GrayBand";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Events" };

const EXCERPT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...";

const EVENTS: EventCardProps[] = [
  { image: "/images/events/card-1.jpg", imageAspectRatio: "509 / 340" },
  { image: "/images/events/card-2.jpg", imageAspectRatio: "1920 / 1280" },
  { image: "/images/events/card-3.jpg", imageAspectRatio: "1920 / 1080" },
  { image: "/images/events/card-4.jpg", imageAspectRatio: "640 / 360" },
  { image: "/images/events/card-5.jpg", imageAspectRatio: "1920 / 1280", compact: true },
  { image: "/images/events/card-6.jpg", imageAspectRatio: "1920 / 1280" },
].map((card) => ({
  ...card,
  title: "Blog heading dummy",
  mobileTitle: "Customer Loyalty Programs That Stick",
  excerpt: EXCERPT,
}));

export default function EventsPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Events"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        image="/images/hero-events.png"
        mobileImage="/images/hero-academics.png"
      />
      <GrayBand>
        <BandContent>
          <div className={styles.grid}>
            {EVENTS.map((event) => (
              <EventCard key={event.image} {...event} />
            ))}
          </div>
        </BandContent>
      </GrayBand>
    </SiteLayout>
  );
}
