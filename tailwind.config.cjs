/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'orbitron' : ['Orbitron', 'sans-serif'],
				'ibmPlex' : ['IBM Plex Mono', 'monospace']

			},

		},
	},
	plugins: [],
}
