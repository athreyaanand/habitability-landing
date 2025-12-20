import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "Habitability",
	title: "Habitability | Free Social Habit Tracker App",
	description: "Habitability is the free social habit tracker app that helps you build lasting habits with friends. Track streaks, stay accountable, and celebrate milestones together. Download for iOS.",
	keywords: [
		// Primary keywords
		"habit tracker",
		"social habit tracker",
		"habit tracker app",
		"habit tracker with friends",
		"free habit tracker",
		// Platform-specific
		"ios habit tracker",
		"iphone habit tracker",
		"best habit tracker iphone",
		"habit tracker ios app",
		// Feature keywords
		"streak tracker",
		"accountability app",
		"habit building app",
		"daily habit tracker",
		"habit tracking app",
		"habit reminder app",
		"goal tracker app",
		// Competitor alternatives
		"habitica alternative",
		"streaks alternative",
		"best habit app 2025",
		// Long-tail keywords
		"habit tracker with accountability",
		"track habits with friends",
		"social accountability app",
		"habit tracker for groups",
		"free habit tracker with streaks",
		"simple habit tracker app",
		// General
		"productivity",
		"self improvement",
		"goal tracking"
	],
	url: "https://habitability.app",
	logo: "/assets/favicon.png",
	twitterHandle: "@habitabilityapp",
	storeLinks: {
		apple: "https://testflight.apple.com/join/VFyYyxPD",
		google: "#",
	},
	socialLinks,
} as const;