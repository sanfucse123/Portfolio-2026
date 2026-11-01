export type HeroContent = {
  heroGreeting: string;
  heroName: string;
  heroSubcopy: string;
  heroAudienceTags: string; // Comma separated, e.g. "MS,UI,UX,FD,2D"
  heroAvailabilityText: string;
  heroCtaPrimaryLabel: string;
  heroCtaPrimaryUrl: string;
  heroCtaSecondaryLabel: string;
  heroCtaSecondaryUrl: string;
};

export const heroContentDefaults: HeroContent = {
  heroGreeting: "Hi there 👋 I'm",
  heroName: "Muhammed Sanfar.",
  heroSubcopy: "I'm a UI/UX designer focused on creating clean, intuitive user experiences. I also do front-end development and 2D animation to bring designs to life with smooth visuals and interactions. Always learning and improving.",
  heroAudienceTags: "MS,UI,UX,FD,2D",
  heroAvailabilityText: "UI/UX Designer · Front-End Developer · Kerala, IN.",
  heroCtaPrimaryLabel: "View Projects",
  heroCtaPrimaryUrl: "/projects",
  heroCtaSecondaryLabel: "Get in Touch",
  heroCtaSecondaryUrl: "/contact",
};
