// Home Page
import type { Metadata } from "next";
import Herosection from "@/components/home/Herosection";
import ScrollingBanner from "@/components/ui/ScrollingBanner";
import dynamic from "next/dynamic";

const CreativeToolbox = dynamic(() => import("@/components/home/CreativeToolbox"));
const BrandsSection = dynamic(() => import("@/components/home/BrandsSection"));
const AboutSection = dynamic(() => import("@/components/home/AboutSection"));
const RecentProjects = dynamic(() => import("@/components/home/RecentProjects"));
const ServicesSection = dynamic(() => import("@/components/services/ServicesSection"));
const ReviewsSection = dynamic(() => import("@/components/home/ReviewsSection"));
const SlidingRoleBanner = dynamic(() => import("@/components/ui/SlidingRoleBanner"));
import { getAboutContent, getHeroContent, getHomeContent } from "@/lib/site-content";
import { getSiteCopyContent } from "@/lib/site-copy-content";
import { getServicesContent } from "@/lib/services-content";
import { getAllProjects } from "@/lib/github-projects";
import { getAchievements } from "@/lib/achievements";
import { homeContentDefaults } from "@/lib/home-content-defaults";
import { siteCopyDefaults } from "@/types/site-copy";
import { homePageContentClass, homePageShellClass } from "@/lib/home-page-design-system";
import { createPageMetadata } from "@/seo/page-metadata";

function parseCommaPhrases(raw: string) {
  return raw.split(",").map((item) => item.trim()).filter(Boolean);
}

export const metadata: Metadata = createPageMetadata({
  title: "Muhammed Sanfar | UI/UX Designer & Front-End Developer",
  description:
    "Muhammed Sanfar is a UI/UX designer and front-end developer from Palakkad, Kerala, creating clean, intuitive user experiences, graphic design, and 2D animation. Available for freelance.",
  path: "/",
  keywords: [
    "Muhammed Sanfar",
    "Muhammed Sanfar portfolio",
    "UI UX designer portfolio",
    "UI/UX Designer Kerala",
    "UI/UX Designer Palakkad",
    "Front-End Developer Kerala",
    "Mobile app designer India",
    "2D animation",
    "UI designer portfolio India",
  ],
});

export default async function Home() {
  const [heroData, homeData, aboutData, siteCopy, services, allProjects, dbAchievements] =
    await Promise.all([
      getHeroContent(),
      getHomeContent(),
      getAboutContent(),
      getSiteCopyContent(),
      getServicesContent(),
      getAllProjects(),
      getAchievements(),
    ]);
  
  // Use selected projects if configured, otherwise fallback to latest 3 coding projects,
  // then to featured image projects (the portfolio is mostly design work)
  let webProjects;
  if (siteCopy.homeRecentWebProjectIds && siteCopy.homeRecentWebProjectIds.length > 0) {
    const idSet = new Set(siteCopy.homeRecentWebProjectIds);
    webProjects = allProjects.filter((p) => idSet.has(p.id));
    // Optional: preserve the order of selection
    webProjects.sort((a, b) => 
      siteCopy.homeRecentWebProjectIds.indexOf(a.id) - siteCopy.homeRecentWebProjectIds.indexOf(b.id)
    );
  } else {
    webProjects = allProjects.filter((p) => p.workspace === "coding").slice(0, 3);
    if (webProjects.length === 0) {
      webProjects = allProjects
        .filter((p) => p.mediaType !== "VIDEO")
        .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
        .slice(0, 3);
    }
  }
  
  let mappedAchievements = dbAchievements.map((a, index) => ({
    id: a.id || `achievement-${index + 1}`,
    name: a.title,
    content: a.description,
    designation: a.category,
    rating: a.featured ? 5 : 0,
  }));

  // Fallback to default demo content if no achievements are in the database
  if (mappedAchievements.length === 0 && siteCopy.homeReviewsItems) {
    mappedAchievements = siteCopy.homeReviewsItems.map((item) => ({
      ...item,
      designation: item.designation || "",
      rating: item.rating || 5 // Ensure stars show up for demo content
    }));
  }

  const scrollingItems = (() => {
    const parsed = parseCommaPhrases(homeData.scrollingBannerItems);
    if (parsed.length > 0) {
      return parsed;
    }
    return parseCommaPhrases(homeContentDefaults.scrollingBannerItems);
  })();

  const slidingRoles = (() => {
    const parsed = parseCommaPhrases(siteCopy.homeSlidingRoles);
    if (parsed.length > 0) {
      return parsed;
    }
    return parseCommaPhrases(siteCopyDefaults.homeSlidingRoles);
  })();

  return (
    <main className={homePageShellClass("relative")}>
      <Herosection
        data={heroData}
        homeLinks={{
          socialLinks: homeData.socialLinks,
          otherSocialLinks: homeData.otherSocialLinks,
          pageLinks: homeData.pageLinks,
        }}
        statusLine={siteCopy.heroStatusLine}
        siteCopy={siteCopy}
      />

      <div className="relative w-full overflow-hidden pointer-events-auto">
        {/* ── Vertical Grid Background Layer (z-0) ────────── */}
        <div 
          className="absolute inset-0 pointer-events-none z-0" 
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.12) 1px, transparent 1px)',
            backgroundSize: '100px 100%',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent), linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskComposite: 'destination-in',
            maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent), linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            maskComposite: 'intersect'
          }} 
        />
        
        {/* All content below the hero section (Content Layer z-20) */}
        <div className={homePageContentClass("z-20")}>
          <ScrollingBanner
            items={scrollingItems}
            speed={30}
          />

          <CreativeToolbox
            heading={siteCopy.homeToolboxHeading}
            intro={siteCopy.homeToolboxIntro}
            categories={siteCopy.homeToolCategories}
            tools={siteCopy.homeTools}
          />
          <BrandsSection logos={homeData.scrollingLogos} />

          {/* Sliding role banner — section separator between Brands and About Me */}
          <SlidingRoleBanner roles={slidingRoles} direction="left" rotation={5.52} className="mt-16" />

          {/* About Me Section */}
          <AboutSection
            heading={siteCopy.homeAboutHeading}
            body={siteCopy.homeAboutBody}
            ctaLabel={siteCopy.homeAboutCtaLabel}
            ctaUrl={siteCopy.homeAboutCtaUrl}
            images={[
              { id: "center", src: aboutData.homeAboutImage1, priority: true },
              { id: "left", src: aboutData.homeAboutImage2 },
              { id: "right", src: aboutData.homeAboutImage3 },
            ]}
          />

          {/* Sliding role banner — section separator below About Me */}
          <SlidingRoleBanner roles={slidingRoles} direction="right" rotation={-4.88} />

          <RecentProjects
            heading={siteCopy.homeRecentHeading}
            intro={siteCopy.homeRecentIntro}
            webTitle={siteCopy.homeRecentWebTitle}
            webCopy={siteCopy.homeRecentWebCopy}
            webCtaLabel={siteCopy.homeRecentWebCtaLabel}
            creativeTitle={siteCopy.homeCreativeTitle}
            creativeCopy={siteCopy.homeCreativeCopy}
            creativeCtaLabel={siteCopy.homeCreativeCtaLabel}
            creativeCategories={siteCopy.homeCreativeCategories}
            projects={webProjects}
          />
          <ServicesSection
            heading={siteCopy.homeServicesHeading}
            intro={siteCopy.homeServicesIntro}
            services={services}
          />
          <ReviewsSection
            heading={siteCopy.homeReviewsHeading}
            intro={siteCopy.homeReviewsIntro}
            items={mappedAchievements}
          />
        </div>
      </div>
    </main>
  );
}
