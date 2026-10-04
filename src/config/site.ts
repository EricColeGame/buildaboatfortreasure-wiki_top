export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Build A Boat For Treasure Wiki",
  shortName: "Build A Boat For Treasure",
  logoText: "B",
  tagline: "Design Custom Boats, Survive Dangerous Journeys & Collect Treasure",
  description: "Build A Boat For Treasure Wiki provides Roblox codes, building guides, treasure maps, block information, and tips to create powerful boats and complete adventures.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://buildaboatfortreasure-wiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://buildaboatfortreasure-wiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/537413528/Build-A-Boat-For-Treasure",
  heroVideoId: "t75i6RCwXRo", // Build A Boat For Treasure - Boat of the Year showcase
  social: {
    discord: "https://www.reddit.com/r/BuildABoatForTreasure/",
    youtube: "https://www.youtube.com/results?search_query=Build+A+Boat+For+Treasure",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
