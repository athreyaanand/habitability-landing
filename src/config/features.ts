import { FiUsers, FiTrendingUp, FiGrid } from "react-icons/fi";
import type { Feature } from "@/types/app";

export const features: Feature[] = [
	{
		title: "Daily Habit Tracker with Visual Progress",
		description: "Our habit tracker app features beautiful visual grids that show your daily habit progress at a glance. Build streaks, set goals, and watch your consistency grow over time with this free habit tracking app.",
		icon: FiGrid,
	},
	{
		title: "Social Habit Tracker with Friends",
		description: "Unlike other habit tracker apps, Habitability is a social habit tracker that lets you connect with friends. Share your progress, send accountability nudges, and celebrate milestones together.",
		icon: FiUsers,
	},
	{
		title: "Streak Tracker & Habit Reminders",
		description: "Never break your habit streak with smart reminders and streak tracking. Our habit tracker for iPhone helps you maintain accountability and build lasting habits with customizable notifications.",
		icon: FiTrendingUp,
	},
];
