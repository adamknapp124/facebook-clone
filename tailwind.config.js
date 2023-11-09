/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		screens: {
			xs: '640px',
			// => @media (min-width: 640px) { ... }
			sm: '768px',
			// => @media (min-width: 640px) { ... }
			md: '900px',
			// => @media (min-width: 768px) { ... }
			lg: '1024px',
			// => @media (min-width: 1024px) { ... }
			lxg: '1100px',
			// => @media (min-width: 1024px) { ... }
			xl: '1280px',
			// => @media (min-width: 1280px) { ... }
			xxl: '1536px',
			// => @media (min-width: 1536px) { ... }
			xxxl: '1920px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
