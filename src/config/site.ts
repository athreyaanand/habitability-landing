import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "Habitability",
	description: "Build lasting habits with friends. Track your progress, stay accountable, and celebrate milestones together.",
	keywords: ["habit tracker", "habit app", "accountability", "habit building", "streak tracker", "ios app", "productivity", "self improvement", "daily habits", "goal tracking"],
	logo: "/assets/favicon.png",
	storeLinks: {
		apple: "https://testflight.apple.com/join/VFyYyxPD",
		google: "#",
	},
	socialLinks,
} as const;