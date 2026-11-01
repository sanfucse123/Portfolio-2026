import type { Metadata, Viewport } from "next";
import { defaultOgImage, siteConfig, siteUrl } from "@/seo/config";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // NOTE: userScalable:false is an accessibility violation (WCAG 1.4.4)
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f5f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | Muhammed Sanfar`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  manifest: "/manifest.json",
  keywords: [
    // Primary identity keywords
    "Muhammed Sanfar",
    "Muhammed Sanfar portfolio",
    "UI/UX Designer",
    "Front-End Developer",
    // Skill keywords
    "Figma Designer",
    "Graphic Designer",
    "2D Animation",
    // Location-based keywords
    "UI/UX Designer Kerala",
    "UI/UX Designer Palakkad",
    "Web Designer India",
    // Intent keywords
    "UI/UX Designer Portfolio",
    "Hire UI/UX Designer India",
  ],
  authors: [{ name: siteConfig.creator, url: siteUrl }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  category: "portfolio",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
  icons: {
    icon: [
      { url: "/sanfar/logo-rounded.png", type: "image/png" },
    ],
    shortcut: "/sanfar/logo-rounded.png",
    apple: [{ url: "/sanfar/apple-touch-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.siteName,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Muhammed Sanfar — UI/UX Designer & Front-End Developer",
        type: "image/jpeg",
      },
    ],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: defaultOgImage,
        alt: "Muhammed Sanfar — UI/UX Designer & Front-End Developer",
      },
    ],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: googleSiteVerification
    ? { google: googleSiteVerification }
    : undefined,
  other: {
    // AI-crawlers — explicit allow
    "Googlebot-News": "noindex",
    "X-Robots-Tag": "index, follow",
  },
};
