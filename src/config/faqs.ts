import type { FAQ } from "@/types/app";

export const faqs: FAQ[] = [
	{
		question: "Is Habitability free?",
		answer: "Yes! The app is completely free to use with full functionality. Premium features like advanced analytics are available with an optional subscription at $4.99/month or $19.99/year, but you don't need them to get value from the app.",
	},
	{
		question: "Can my friends see all my habits?",
		answer: "Nope - you're in full control. Each habit can be set to private (only you), visible to all friends, or shared with specific people. Your data is always yours.",
	},
	{
		question: "What platforms is Habitability available on?",
		answer: "Available on both iOS (App Store) and Android (Google Play). Your data syncs across all your devices automatically.",
	},
	{
		question: "Does it work offline?",
		answer: "Yes! Track your habits without an internet connection. Everything syncs automatically when you're back online.",
	},
	{
		question: "How do I delete my account?",
		answer: "Go to Profile > Account > Delete Account and confirm with your username. Successful deletion removes your account and associated active app records; backups and provider records may remain as described in our Privacy Policy. Manage any subscription separately through your app store.",
	},
	{
		question: "Can I export my data?",
		answer: "Premium users can export habits and completion history as a JSON file from Profile > Data Management. For requests involving other personal information, contact privacy@habitability.app; a premium subscription is not required.",
	},
];
