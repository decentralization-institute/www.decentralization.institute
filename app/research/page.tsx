import type { Metadata } from "next";
import { BandNote, GrayBand } from "@/components/GrayBand";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Research"
        description="The Decentralization Institute conducts a variety of research on decentralized technologies, from new distributed systems architectures, to measuring decentralization on the Internet."
        image="/images/hero-research.png"
        mobileImage={null}
      />
      <GrayBand>
        <BandNote>This page is work in progress...</BandNote>
      </GrayBand>
    </SiteLayout>
  );
}
