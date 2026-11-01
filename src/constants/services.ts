export interface ProjectLink {
  label: string;
  url: string;
  icon?: 'Figma' | 'Github' | 'Globe' | 'ExternalLink' | 'Code2' | 'Zap' | 'Instagram' | 'Youtube' | 'Dribbble' | 'Box';
}

export interface ServiceContent {
  type: 'image' | 'video' | 'text' | 'project';
  /** When set, this showcase row was filled from Admin → Projects (portfolio). */
  linkedProjectId?: string;
  url?: string;
  title: string;
  description: string;
  // New fields for project showcase
  date?: string;
  duration?: string;
  role?: string;
  projectIcon?: string; // Icon identifier or URL
  mockupImage?: string; // Device mockup URL
  /** Behance project embed widget URL (sanitized `src`) — use iframe on the service page, not as an image. */
  embedIframeSrc?: string;
  threeDModel?: string; // Path to .glb file
  videoUrl?: string; // Path to .mp4 or similar
  projectLinks?: ProjectLink[]; // Contextual links (Figma, GitHub, etc.)
  techStack?: string[]; // Technology tags
  bgColor?: string; // Suggestion for right-side card background
}

export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  accentColor: string;
  providedServices: string[];
  contents?: ServiceContent[];
  projectsUrl?: string; // New: Redirect link for 'View More'
  projectsLabel?: string; // New: Dynamic label for 'View More'
  iconUrl?: string; // Optional homepage/service card icon or image
}

export const services: Service[] = [
  {
    id: "ui-ux",
    title: "UI / UX Design",
    description: "Clean, intuitive, user-focused experiences for mobile and web applications.",
    detailedDescription:
      "I'm really passionate about designing mobile and web applications. I love learning and coming up with new ways to make products better and attract new users.",
    accentColor: "#0c8599",
    projectsUrl: "/projects",
    projectsLabel: "View More",
    providedServices: ["Mobile App Design", "Web App Design", "Wireframing", "Prototyping", "Case Studies"],
    contents: [
      {
        type: "project",
        title: "TicketME",
        description: "Redefining how you book entertainment.",
        projectIcon: "Zap",
        mockupImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        bgColor: "#f0f9ff",
        techStack: ["Figma", "UI/UX"],
        projectLinks: [
          { label: "Behance", url: "https://www.behance.net/gallery/239857891/Ticket-ME-Redefining-How-You-Book-Entertainment", icon: "ExternalLink" }
        ],
        date: "2025",
        role: "UI/UX Designer"
      }
    ]
  },
  {
    id: "graphics-design",
    title: "Graphic Design",
    description: "Designing with a friendly twist that injects some soul into a product.",
    detailedDescription:
      "Designing with a friendly twist has been quite the journey! All it takes is a creative spark to inject some soul into a product, and I've showcased my knack for delivering innovative designs.",
    accentColor: "#be4bdb",
    projectsUrl: "/projects",
    projectsLabel: "View More",
    providedServices: ["Branding", "Social Media Graphics", "Visual Design"],
    contents: [
      {
        type: "project",
        title: "Music X",
        description: "A music player app with a bold visual style.",
        projectIcon: "Palette",
        mockupImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800",
        bgColor: "#f8f0fc",
        techStack: ["Figma", "Visual Design"],
        projectLinks: [
          { label: "Dribbble", url: "https://dribbble.com/shots/22899194-Music-X-Music-player-app", icon: "Dribbble" }
        ],
        date: "2023",
        role: "Designer"
      }
    ]
  },
  {
    id: "web",
    title: "Web Design",
    description: "Eye-catching, inviting websites for companies, complete with a stunning rebrand.",
    detailedDescription:
      "I have an in-depth understanding of how websites work and have crafted some very sophisticated websites for companies. If you are looking for a site that is eye-catching and inviting, I can put together the perfect one for you.",
    accentColor: "#3b5bdb",
    projectsUrl: "/projects",
    projectsLabel: "View More",
    providedServices: ["Landing Pages", "Company Websites", "Front-End Development", "Rebranding"],
    contents: [
      {
        type: "project",
        title: "CLiNK",
        description: "Browser extension design.",
        projectIcon: "Globe",
        mockupImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        techStack: ["Figma", "Web Extension"],
        projectLinks: [
          { label: "Dribbble", url: "https://dribbble.com/shots/23701122-CLINK-Browser-Extension", icon: "Dribbble" }
        ],
        date: "2023",
        role: "UI/UX Designer"
      }
    ]
  },
  {
    id: "motion-video-editing",
    title: "2D Animation",
    description: "Bringing designs to life with smooth visuals, motion, and engaging micro-interactions.",
    detailedDescription:
      "My 2D animation skills help me create stronger visuals and engaging micro-interactions that make products and stories feel alive.",
    accentColor: "#7048e8",
    projectsUrl: "/projects",
    projectsLabel: "View More",
    providedServices: ["2D Animation", "Micro-interactions", "Motion Graphics", "Explainer Videos"],
    contents: [
      {
        type: "project",
        title: "2D Animation",
        description: "Animation project.",
        projectIcon: "Zap",
        mockupImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        bgColor: "#f3f0ff",
        techStack: ["2D Animation"],
        projectLinks: [
          { label: "YouTube", url: "https://youtu.be/-kntB7anP1I", icon: "Youtube" }
        ],
        date: "2025",
        role: "Animator"
      }
    ]
  }
];
