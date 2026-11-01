import type { Metadata } from "next";
import ScrapbookHero from "@/components/about/ScrapbookHero";
import DeskBookSection from "@/components/about/DeskBookSection";
import TelevisionSection from "@/components/about/TypewriterSection";
import { getAboutContent } from "@/lib/site-content";
import { getSiteCopyContent } from "@/lib/site-copy-content";
import { createPageMetadata } from "@/seo/page-metadata";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createPageMetadata({
  title: "About Muhammed Sanfar | UI/UX Designer & Front-End Developer",
  description:
    "Discover the story of Muhammed Sanfar — a UI/UX designer and front-end developer from Palakkad, Kerala, who designs clean, intuitive, user-focused experiences with graphic design and 2D animation.",
  path: "/about",
  keywords: [
    "Muhammed Sanfar about",
    "UI/UX Designer India",
    "UI/UX Designer Palakkad",
    "Front-End Developer Kerala",
    "Figma designer portfolio",
    "OpenWebChallenge hackathon winner",
  ],
});

export default async function AboutPage() {
  const aboutContent = await getAboutContent();
  const siteCopy = await getSiteCopyContent();

  return (
    <main
      id="about-page-audio-root"
      className="relative min-h-screen overflow-hidden bg-[#f4f1eb]"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.06\'/%3E%3C/svg%3E")', backgroundSize: '100px 100px' }}
    >
      <ScrapbookHero
        content={aboutContent}
        copy={{
          aboutStickyNote: siteCopy.aboutStickyNote,
          aboutLowerRightNote: siteCopy.aboutLowerRightNote,
          aboutFooterTag: siteCopy.aboutFooterTag,
        }}
      />
      <DeskBookSection
        copy={{
          aboutIntroTitle: siteCopy.aboutIntroTitle,
          aboutIntroBody: siteCopy.aboutIntroBody,
          aboutBookImage: siteCopy.aboutBookImage,
          aboutTimelineTitle: siteCopy.aboutTimelineTitle,
          aboutTimelineEntries: siteCopy.aboutTimelineEntries,
          homeReviewsItems: siteCopy.homeReviewsItems,
          aboutResumeUrl: siteCopy.aboutResumeUrl,
          aboutDesignResumeUrl: siteCopy.aboutDesignResumeUrl,
        }}
      />
      <div className="relative z-20 -mt-28">
        <TelevisionSection quote={siteCopy.aboutTypewriterQuote} />
      </div>
    </main>
  );
}
