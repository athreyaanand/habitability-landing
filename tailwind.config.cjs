/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: ["selector", '[class~="dark"]'],
	theme: {
		extend: {
			screens: {
				light: { raw: "(prefers-color-scheme: light)" },
			},
			boxShadow: {
				soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
				hover:
					"0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)",
			},
			transitionTimingFunction: {
				smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwind-scrollbar-hide"),
		({ addVariant }) => {
			addVariant("light", ".light &");
		},
	],
};
