import type { Metadata } from "next";
import { BandContent, BandNote, GrayBand } from "@/components/GrayBand";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = { title: "Academics" };

export default function AcademicsPage() {
  return (
    <SiteLayout>
      {/* The production page reuses the Events copy in its hero. */}
      <PageHero
        title="Events"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        image="/images/hero-academics.png"
      />
      <GrayBand>
        <BandNote>This page is a work in progress...</BandNote>
        <BandContent />
      </GrayBand>
    </SiteLayout>
  );
}
