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
		description: "Connect with friends to share your progress. Send nudges, celebrate milestones, and keep each other motivated.",
		icon: FiUsers,
	},
	{
		title: "Build Lasting Streaks",
		description: "Set streak goals and get smart reminders. Track your current streak and never break the chain.",
		icon: FiTrendingUp,
	},
];
