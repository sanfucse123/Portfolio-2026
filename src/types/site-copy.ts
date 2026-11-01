import type { HomeContent } from "@/lib/home-content-defaults";
import type { ContactSectionSettings } from "./contact";

export interface SiteCopyReviewItem {
  id: string;
  name: string;
  content: string;
  designation?: string;
  rating: number;
}

export interface SiteCopyCreativeCategory {
  title: string;
  description: string;
  image: string;
  lottieUrl?: string;
}

export interface SiteCopyTool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  url?: string;
}

export interface SiteCopyTimelineEntry {
  role: string;
  organization: string;
  duration: string;
  copy: string;
}

export interface SiteCopyComparisonFeature {
  label: string;
  others: boolean;
  me: boolean;
}

export interface SiteCopyFaqItem {
  question: string;
  answer: string;
}

export interface SiteCopyNavLink {
  name: string;
  path: string;
}

export interface SiteCopyContent {
  heroStatusLine: string;
  homeAboutHeading: string;
  homeAboutBody: string;
  homeAboutCtaLabel: string;
  homeAboutCtaUrl: string;
  homeToolboxHeading: string;
  homeToolboxIntro: string;
  homeToolCategories: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  homeTools: SiteCopyTool[];
  homeRecentHeading: string;
  homeRecentIntro: string;
  homeRecentWebTitle: string;
  homeRecentWebCopy: string;
  homeRecentWebCtaLabel: string;
  homeRecentWebProjectIds: string[];
  homeSlidingRoles: string;
  homeCreativeTitle: string;
  homeCreativeCopy: string;
  homeCreativeCtaLabel: string;
  homeCreativeCategories: SiteCopyCreativeCategory[];
  homeServicesHeading: string;
  homeServicesIntro: string;
  homeReviewsHeading: string;
  homeReviewsIntro: string;
  homeReviewsItems: SiteCopyReviewItem[];
  aboutStickyNote: string;
  aboutLowerRightNote: string;
  aboutFooterTag: string;
  aboutIntroTitle: string;
  aboutIntroBody: string;
  aboutBookImage: string;
  aboutTimelineTitle: string;
  aboutTimelineEntries: SiteCopyTimelineEntry[];
  aboutTypewriterQuote: string;
  servicesHeroTitle: string;
  servicesWhyEyebrow: string;
  servicesWhyHeading: string;
  servicesWhyIntro: string;
  servicesWhyCtaLabel: string;
  servicesWhyCtaUrl: string;
  servicesWhyFeatures: SiteCopyComparisonFeature[];
  servicesFaqEyebrow: string;
  servicesFaqHeading: string;
  servicesFaqIntro: string;
  servicesFaqItems: SiteCopyFaqItem[];
  servicesFaqCtaText: string;
  servicesFaqCtaLabel: string;
  contactEyebrow: string;
  contactHeading: string;
  contactSupportLine: string;
  contactGiantText: string;
  footerBrandEyebrow: string;
  footerSupportCopy: string;
  footerEmail: string;
  footerCtaHeading: string;
  footerCtaCopy: string;
  footerCopyright: string;
  footerCredit: string;
  footerLocation: string;
  footerLargeText: string;
  aboutResumeUrl: string;
  aboutDesignResumeUrl: string;
  navLinks: SiteCopyNavLink[];
  preloaderText: string;
  homeBackgroundImage: string;
  contactBackgroundImage: string;
  contactInstagramLabel: string;
  contactLinkedinLabel: string;
  contactEmailLabel: string;
  designerResumeLabel: string;
  designerResumeDesc: string;
  developerResumeLabel: string;
  developerResumeDesc: string;
  resumeDropdownTitle: string;
  resumeButtonLabel: string;
  heroMobileCtaLabel: string;
  heroMobileResumeLabel: string;
  seoSiteName: string;
  seoDefaultTitle: string;
  seoDescription: string;
  seoTwitterHandle: string;
  seoKeywords: string[];
  seoOgImageAlt: string;
  seoJobTitle: string;
  seoEmployer: string;
  seoEducation: string;
  seoPhone: string;
  seoKnowsAbout: string[];
  seoKnowsLanguage: string[];
  seoProfileImage: string;
}

export const siteCopyDefaults: SiteCopyContent = {
  heroStatusLine: "Available for freelance projects, collaborations.",
  homeAboutHeading: "About [Me]",
  homeAboutBody:
    "For quite a while, I have been really passionate about creating things, and computers have done so much to help me. Whenever I find myself stuck, it's always been like having a new canvas, a chance to start fresh. With the help of computers, I have learnt how to make something beautiful.",
  homeAboutCtaLabel: "More about",
  homeAboutCtaUrl: "/about",
  homeToolboxHeading: "My Creative [Toolbox]",
  homeToolboxIntro:
    "The tools I use reflect how I work. Some help me design, some help me build, and some help me present ideas more clearly from rough concept to finished product.",
  homeToolCategories: [
    { id: "design", name: "Design Tools", description: "UI/UX, graphics, and prototyping" },
    { id: "video", name: "Animation Tools", description: "2D animation and motion" },
    { id: "development", name: "Development Tools", description: "Front-end development" },
  ],
  homeTools: [
    { id: "figma", name: "Figma", description: "Interface Design & Prototyping", icon: "https://skillicons.dev/icons?i=figma", category: "design", url: "" },
    { id: "photoshop", name: "Photoshop", description: "Image Manipulation & Editing", icon: "https://skillicons.dev/icons?i=ps", category: "design", url: "" },
    { id: "illustrator", name: "Illustrator", description: "Vector Graphics Software", icon: "https://skillicons.dev/icons?i=ai", category: "design", url: "" },
    { id: "aftereffects", name: "After Effects", description: "2D Animation & Motion", icon: "https://skillicons.dev/icons?i=ae", category: "video", url: "" },
    { id: "premiere", name: "Premiere Pro", description: "Video Editing Software", icon: "https://skillicons.dev/icons?i=pr", category: "video", url: "" },
    { id: "html", name: "HTML", description: "Markup Language", icon: "https://skillicons.dev/icons?i=html", category: "development", url: "" },
    { id: "css", name: "CSS", description: "Styling Language", icon: "https://skillicons.dev/icons?i=css", category: "development", url: "" },
    { id: "js", name: "JavaScript", description: "Programming Language", icon: "https://skillicons.dev/icons?i=js", category: "development", url: "" },
    { id: "react", name: "React", description: "UI Library", icon: "https://skillicons.dev/icons?i=react", category: "development", url: "" },
  ],
  homeRecentHeading: "Selected [Projects]",
  homeRecentIntro:
    "A few of the apps, extensions, and animation projects I have designed, from first sketch to polished interface.",
  homeRecentWebTitle: "UI/UX & App Design",
  homeRecentWebCopy:
    "Designing mobile and web applications with clean, intuitive flows. I love finding new ways to make products better and attract new users.",
  homeRecentWebCtaLabel: "More Work",
  homeRecentWebProjectIds: [],
  homeSlidingRoles:
    "UI/UX Designer, Front-End Developer, Graphic Designer, 2D Animator",
  homeCreativeTitle: "Creative [Stuff]",
  homeCreativeCopy:
    "Designing with a friendly twist has been quite the journey. My graphic design and 2D animation skills help me create stronger visuals and engaging micro-interactions.",
  homeCreativeCtaLabel: "Contact me",
  homeCreativeCategories: [
    {
      title: "UI/UX Design",
      description: "Clean, intuitive, user-focused experiences for mobile and web applications.",
      image: "https://i.pinimg.com/originals/06/78/0a/06780a83ccb6e905e4a62e58d670fc66.gif",
      lottieUrl: ""
    },
    {
      title: "2D Animation",
      description: "Bringing designs to life with smooth visuals, motion, and engaging micro-interactions.",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600",
      lottieUrl: "https://v1.pinimg.com/videos/iht/expMp4/5f/13/31/5f1331c04272eb0210b7f42997bc4c5f_720w.mp4"
    },
    {
      title: "Graphic Design",
      description: "Designs with a friendly twist that inject some soul into a product.",
      image: "https://i.pinimg.com/originals/8b/f5/48/8bf54831ebcd64c99b13ffdde40c97fe.gif",
      lottieUrl: ""
    },
    {
      title: "Web Design",
      description: "Eye-catching, inviting websites for companies, complete with a stunning rebrand.",
      image: "https://i.pinimg.com/originals/9c/06/f4/9c06f4f6c63b3e832b52bb0c60e0ffb6.gif",
      lottieUrl: ""
    }
  ],
  homeServicesHeading: "I can help you [with]",
  homeServicesIntro:
    "I handle the full design process, work well with teams, and adapt quickly, balancing creativity with practical problem-solving.",
  homeReviewsHeading: "Certifications and [Achievements]",
  homeReviewsIntro:
    "Internships, courses, and hackathons that shaped how I design and build.",
  homeReviewsItems: [
    {
      id: "openwebchallenge",
      name: "GDG Madurai",
      content:
        "Winner of the one-day hackathon \"OpenWebChallenge\" organized by Google Developers on 22 July 2017 at Madurai.",
      designation: "Hackathon Winner",
      rating: 0,
    },
    {
      id: "lxisoft-fullstack",
      name: "LXISOFT, Palakkad",
      content:
        "Completed the one-year \"Fullstack Developer\" internship program at LXI Technologies Palakkad (July 2019 to March 2020).",
      designation: "Internship",
      rating: 0,
    },
    {
      id: "google-outofbox",
      name: "Google Device Lab, Bangalore",
      content:
        "Participated in the one-week internship program \"OutofBox\" organized by Google Developers, Sep 11 to 16, 2017.",
      designation: "Internship",
      rating: 0,
    },
    {
      id: "udemy-uiux",
      name: "Udemy",
      content:
        "Completed \"Complete Web & Mobile Designer: UI/UX, Figma + More\" by Andrei Neagoie and Daniel Schifano.",
      designation: "Certification",
      rating: 0,
    },
  ],
  aboutStickyNote: "Always learning.\nAlways inspiring.",
  aboutLowerRightNote:
    "I'm always learning and bring a positive, humble attitude to every project.",
  aboutFooterTag: "Issue 2026 · Muhammed Sanfar Archive",
  aboutIntroTitle: "Perfect from beginning to end",
  aboutIntroBody:
    "I'm Sanfar, a designer who creates clean, intuitive, user-focused experiences with a balance of creativity and practical problem-solving. I handle the full design process, work well with teams, and adapt quickly.\n\nMy graphic design and 2D animation skills help me create stronger visuals and engaging micro-interactions, and front-end development lets me bring those designs to life. I'm always learning and bring a positive, humble attitude to every project.",
  aboutBookImage: "/sanfar/sanfar-cutout.webp",
  aboutTimelineTitle: "Chronicles of Work",
  aboutTimelineEntries: [
    {
      role: "Fullstack Developer Internship",
      organization: "LXI Technologies (LXISOFT), Palakkad",
      duration: "Jul 2019 to Mar 2020",
      copy:
        "Completed a one-year internship program as a Fullstack Developer, building a strong foundation in web development.",
    },
    {
      role: "\"OutofBox\" Internship Program",
      organization: "Google Device Lab, Bangalore",
      duration: "Sep 2017",
      copy:
        "Participated in a one-week internship program organized by Google Developers.",
    },
    {
      role: "Winner, \"OpenWebChallenge\" Hackathon",
      organization: "GDG Madurai",
      duration: "Jul 2017",
      copy:
        "Won the one-day hackathon organized by Google Developers in Madurai.",
    },
    {
      role: "Complete Web & Mobile Designer: UI/UX, Figma + More",
      organization: "Udemy",
      duration: "Online",
      copy:
        "Completed the course by Andrei Neagoie and Daniel Schifano covering UI/UX design and Figma.",
    },
  ],
  aboutTypewriterQuote: "\"With the help of computers, I have learnt how to make something beautiful.\"",
  servicesHeroTitle: "Services",
  servicesWhyEyebrow: "Why work with me",
  servicesWhyHeading: "Why work [with me]",
  servicesWhyIntro:
    "I work across UI/UX design, graphic design, 2D animation, and front-end development, which means less handoff friction and better alignment between the original idea and the final product.",
  servicesWhyCtaLabel: "Get Started",
  servicesWhyCtaUrl: "/contact",
  servicesWhyFeatures: [
    { label: "Design and development in one workflow", others: false, me: true },
    { label: "Cleaner handoff between idea and build", others: false, me: true },
    { label: "Strong visual polish", others: true, me: true },
    { label: "Product-minded execution", others: true, me: true },
    { label: "Flexible across creative and technical work", others: false, me: true },
  ],
  servicesFaqEyebrow: "FAQs",
  servicesFaqHeading: "Common [Questions]",
  servicesFaqIntro:
    "A few quick answers about the kind of work I take on and how I usually approach a project.",
  servicesFaqItems: [
    {
      question: "What kind of projects do you usually take on?",
      answer:
        "I usually work on mobile and web app design, websites for companies, brand visuals, and 2D animation.",
    },
    {
      question: "Do you only design, or do you also build?",
      answer:
        "I do both. I design the interface first, then use front-end development to bring it to life with smooth visuals and interactions.",
    },
    {
      question: "Are you available for freelance work?",
      answer:
        "Yes. I am open to freelance work, collaborations, and selected longer-term opportunities depending on the scope.",
    },
    {
      question: "Do you work with startups and student-led teams?",
      answer:
        "Yes. I am comfortable working with early-stage ideas and helping shape them into something clearer and more ready to build.",
    },
    {
      question: "How do you usually start a project?",
      answer:
        "I usually start by understanding the goal, audience, required features, and the overall visual direction. After that, I move into structure, design, and implementation in a practical order.",
    },
    {
      question: "Can you help improve an existing product or site?",
      answer:
        "Yes. I can step into an existing product or site to improve the UI, clean up the frontend, refine flows, or make the overall experience feel more consistent.",
    },
  ],
  servicesFaqCtaText: "Could not find the answer you were looking for?",
  servicesFaqCtaLabel: "Contact Me",
  contactEyebrow: "Let's Connect",
  contactHeading: "Let's start a project together.",
  contactSupportLine:
    "Tell me your name, your organization, the services you are looking for, and a little about your project. Call me for any queries: +91 79 07 14 82 92.",
  contactGiantText: "Contact Me",
  footerBrandEyebrow: "Made to amaze, by Muhammed Sanfar.",
  footerSupportCopy:
    "UI/UX design, front-end development, graphic design, and 2D animation from Palakkad, Kerala.",
  footerEmail: "sanfucse007@gmail.com",
  footerCtaHeading: "Let's do a dance together.",
  footerCtaCopy: "Get in touch.",
  footerCopyright: "MUHAMMED SANFAR 2026 ©",
  footerCredit: "",
  footerLocation: "Palakkad, Kerala, India",
  footerLargeText: "Muhammed Sanfar",
  aboutResumeUrl: "https://dribbble.com/Muhammed_Sanfar",
  aboutDesignResumeUrl: "https://www.behance.net/muhammedsanfar",
  navLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],
  preloaderText: "Muhammed Sanfar",
  homeBackgroundImage: "/Home/cloud.jpg",
  contactBackgroundImage: "https://static.vecteezy.com/system/resources/thumbnails/013/396/404/small/crumpled-paper-texture-realisric-crease-sheet-free-vector.jpg",
  contactInstagramLabel: "Instagram",
  contactLinkedinLabel: "LinkedIn",
  contactEmailLabel: "Gmail",
  designerResumeLabel: "Behance Portfolio",
  designerResumeDesc: "UI/UX case studies",
  developerResumeLabel: "Dribbble Shots",
  developerResumeDesc: "UI explorations & visuals",
  resumeDropdownTitle: "View portfolio on",
  resumeButtonLabel: "Portfolio",
  heroMobileCtaLabel: "Projects",
  heroMobileResumeLabel: "Portfolio",
  seoSiteName: "Muhammed Sanfar Portfolio",
  seoDefaultTitle: "Muhammed Sanfar | UI/UX Designer & Front-End Developer",
  seoDescription:
    "Portfolio of Muhammed Sanfar, a UI/UX designer and front-end developer from Palakkad, Kerala, creating clean, intuitive user experiences with smooth visuals and 2D animation.",
  seoTwitterHandle: "",
  seoKeywords: [
    "Muhammed Sanfar",
    "Muhammed Sanfar portfolio",
    "UI/UX Designer",
    "Front-End Developer",
    "Figma Designer",
    "Mobile App Designer",
    "Web Designer India",
    "UI/UX Designer Kerala",
    "UI/UX Designer Palakkad",
    "2D Animation",
    "Graphic Designer",
    "Freelance UI/UX Designer India",
  ],
  seoOgImageAlt: "Muhammed Sanfar — UI/UX Designer & Front-End Developer",
  seoJobTitle: "UI/UX Designer & Front-End Developer",
  seoEmployer: "",
  seoEducation: "",
  seoPhone: "+917907148292",
  seoKnowsAbout: [
    "UI/UX Design",
    "Figma",
    "Graphic Design",
    "2D Animation",
    "Front-End Development",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  seoKnowsLanguage: ["en", "ml"],
  seoProfileImage: "/sanfar/sanfar-portrait.webp",
};

export interface PublicSiteShellContent {
  siteCopy: SiteCopyContent;
  socialLinks: HomeContent["socialLinks"];
  contactSettings: ContactSectionSettings;
}
