export interface ContactSectionSettings {
  introText: string;
  instagramUrl: string;
  linkedinUrl: string;
  contactEmail: string;
  formEnabled: boolean;
}

export const contactSectionDefaults: ContactSectionSettings = {
  introText: "I promise to reply within 24 hours, every time.",
  instagramUrl: "https://www.instagram.com/possible_crafts",
  linkedinUrl: "https://www.linkedin.com/in/muhammed-sanfar/",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sanfucse007@gmail.com",
  formEnabled: true,
};
