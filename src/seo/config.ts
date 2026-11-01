export const siteConfig = {
  name: "Muhammed Sanfar",
  siteName: "Muhammed Sanfar Portfolio",
  defaultTitle: "Muhammed Sanfar | UI/UX Designer & Front-End Developer",
  description:
    "Portfolio of Muhammed Sanfar, a UI/UX designer and front-end developer from Palakkad, Kerala, creating clean, intuitive user experiences with smooth visuals and 2D animation.",
  locale: "en_IN",
  creator: "Muhammed Sanfar",
  twitterHandle: "",
  /** LinkedIn, Behance, Dribbble for social graph signals */
  socialProfiles: [
    "https://www.linkedin.com/in/muhammed-sanfar/",
    "https://www.behance.net/muhammedsanfar",
    "https://dribbble.com/Muhammed_Sanfar",
  ],
  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],
} as const;

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = (
  configuredSiteUrl && configuredSiteUrl.length > 0
    ? configuredSiteUrl
    : "https://sanfar-portfolio.netlify.app"
).replace(/\/+$/, "");

export const defaultOgImage = `${siteUrl}/og-image.jpg`;

export function getAbsoluteUrl(path = "/") {
  return new URL(path.startsWith("/") ? path : `/${path}`, siteUrl).toString();
}
