import { FiUsers, FiTrendingUp, FiGrid } from "react-icons/fi";
import type { Feature } from "@/types/app";

export const features: Feature[] = [
	{
		title: "Simple Habit Tracking",
		description: "Tap to check off your habits. See your history as a grid so you know at a glance how you've been doing.",
		icon: FiGrid,
	},
	{
		title: "Friends Keep You Honest",
		description: "Add friends to hold you accountable. They'll see when you skip a day, celebrate your wins, and nudge you to get back on track.",
		icon: FiUsers,
	},
	{
		title: "Streaks That Matter",
		description: "Don't break your streak! Nobody wants to be the one who broke a 30-day streak :(",
		icon: FiTrendingUp,
	},
];
