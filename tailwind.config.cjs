/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/tailwind-datepicker-react/dist/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				chart: {
					0: '#a5f3fc',
					1: '#67e8f9',
					2: '#22d3ee',
					3: '#06b6d4',
					4: '#0891b2',
				},
			},
		},
	},
	plugins: [],
};

module.exports = config;
