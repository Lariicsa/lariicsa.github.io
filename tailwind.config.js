/** @format */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: [
		// Example content paths...
		"./public/**/*.html",
		"./src/**/*.{js,jsx,ts,tsx,vue}",
	],

	theme: {
		extend: {
			colors: {
				text: "#e0e0e0",
				magenta: "#8c2c7c",
				grey1: "#282828",
				grey2: "#363636",
			},
		},
		screens: {
			xs: "475px",
			// => @media (min-width: 475px) { ... }
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1025px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
};
