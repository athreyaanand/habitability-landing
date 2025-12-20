import { FiUsers, FiTrendingUp, FiGrid } from "react-icons/fi";
import type { Feature } from "@/types/app";

export const features: Feature[] = [
	{
		title: "Track Your Habits",
		description: "Beautiful visual grids show your progress at a glance. Build streaks, set goals, and watch your consistency grow over time.",
		icon: FiGrid,
	},
	{
		title: "Stay Accountable with Friends",
		description: "Share habits with the people who matter. Send nudges, celebrate milestones, and keep each other motivated when things get hard.",
		icon: FiUsers,
	},
	{
		title: "Build Lasting Streaks",
		description: "Smart reminders help you show up every day. Track your streaks and never break the chain.",
		icon: FiTrendingUp,
	},
];
