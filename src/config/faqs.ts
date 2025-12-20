import type { FAQ } from "@/types/app";

export const faqs: FAQ[] = [
	{
		question: "Is Habitability free to use?",
		answer: "Yes! Habitability is a free-first app and has full functionality without paying :) Premium features like advanced analytics and unlimited habits are available with a subscription at $4.99/month or $19.99/year.",
	},
	{
		question: "Can my friends see all my habits?",
		answer: "You have full control over your privacy. Each habit can be set to private (only you), visible to all friends, or shared with specific friends. Your data is always yours to control.",
	},
	{
		question: "What platforms is Habitability available on?",
		answer: "Habitability is currently available for iOS via TestFlight, with Android coming soon. Your data syncs across all your devices automatically.",
	},
	{
		question: "How do I delete my account and data?",
		answer: "You can delete your account and all associated data directly from the app in Settings > Account > Delete Account. All your data will be immediately and permanently deleted from our servers.",
	},
	{
		question: "Can I export my habit data?",
		answer: "Yes! You can export all your habits and completion history as a JSON file from the Data Management section in Settings. You can also import data from a previous export.",
	},
];
