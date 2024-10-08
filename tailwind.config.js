/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primarySoftBlue: "hsl(231, 69%, 60%)",
				primarySoftRed: "hsl(0, 94%, 66%)",
				grayishBlue: "hsl(229, 8%, 60%)",
				veryDarkBlue: "hsl(229, 31%, 21%)",
				darkBlue: "rgba(37, 43, 70, 0.95)",
				lightGray: "#f7f6f6",
			},
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
			},
		},
	},
	plugins: [],
};
