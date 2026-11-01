import { getAboutContent, getHeroContent } from "@/lib/site-content";
import { createClient } from "@/utils/supabase/server";

export type AssistantIntent = "about" | "projects" | "skills" | "contact" | "none";

export interface JarvisResponse {
  text: string;
  intent: AssistantIntent;
}

export async function generateJarvisResponse(query: string): Promise<JarvisResponse> {
  const normalizedQuery = query.toLowerCase();
  
  // 1. Fetch Context
  const supabase = await createClient();
  const [about, hero, projectsRes] = await Promise.all([
    getAboutContent(),
    getHeroContent(),
    supabase
      .from("projects")
      .select("title, description, image_url, live_url, tags")
      .limit(5),
  ]);

  const projects = projectsRes.data || [];

  // 2. Intent Matching Logic (The Virtual Self Brain)
  
  // Who am I / About
  if (normalizedQuery.includes("who are you") || normalizedQuery.includes("about you") || normalizedQuery.includes("who is sanfar")) {
    return {
      text: `I am the Virtual Self of Muhammed Sanfar. He is a UI/UX designer from Palakkad, Kerala, focused on creating clean, intuitive user experiences. He also does front-end development and 2D animation to bring designs to life.`,
      intent: "about"
    };
  }

  // Projects
  if (normalizedQuery.includes("project") || normalizedQuery.includes("work") || normalizedQuery.includes("portfolio")) {
    return {
      text: `Sanfar has worked on several exciting projects including ${projects[0]?.title || "TicketME"} and ${projects[1]?.title || "IoTRIX"}. Each project focuses on clean, intuitive, user-focused design.`,
      intent: "projects"
    };
  }

  // Skills
  if (normalizedQuery.includes("skill") || normalizedQuery.includes("tech") || normalizedQuery.includes("use")) {
    return {
      text: `Sanfar designs in Figma, Photoshop, and Illustrator, animates in After Effects, and builds front ends with HTML, CSS, and JavaScript.`,
      intent: "skills"
    };
  }

  // Availability / Contact
  if (normalizedQuery.includes("hire") || normalizedQuery.includes("contact") || normalizedQuery.includes("available")) {
    return {
      text: `Sanfar is currently ${hero.heroAvailabilityText.toLowerCase()}. You can reach out to him via the contact section, at sanfucse007@gmail.com, or on LinkedIn. He's always open for freelance or full-time opportunities!`,
      intent: "contact"
    };
  }

  // Default
  return {
    text: "That's an interesting question, sir. Based on my current data, Sanfar focuses on clean, intuitive UI/UX design. Could you be more specific about what you'd like to know?",
    intent: "none"
  };
}
