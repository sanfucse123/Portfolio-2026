export type HomeContent = {
  scrollingBannerItems: string; // Comma separated items
  scrollingLogos: string[]; // Array of logo URLs
  socialLinks: {
    github: string;
    behance: string;
    linkedin: string;
    instagram: string;
  };
  otherSocialLinks: Array<{
    id: string;
    label: string;
    url: string;
  }>;
  pageLinks: {
    about: string;
    projects: string;
    services: string;
    contact: string;
  };
};

export const homeContentDefaults: HomeContent = {
  scrollingBannerItems: "UI/UX Designer,Front-End Developer,Graphic Designer,2D Animator",
  scrollingLogos: [],
  socialLinks: {
    github: "",
    behance: "https://www.behance.net/muhammedsanfar",
    linkedin: "https://www.linkedin.com/in/muhammed-sanfar/",
    instagram: "https://www.instagram.com/possible_crafts",
  },
  otherSocialLinks: [
    { id: "dribbble", label: "Dribbble", url: "https://dribbble.com/Muhammed_Sanfar" },
  ],
  pageLinks: {
    about: "/about",
    projects: "/projects",
    services: "/services",
    contact: "/contact",
  },
};
