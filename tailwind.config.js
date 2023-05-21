/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./views/**/*.{html,js,hbs}",
		"./src/**/*.{html,js}"
	],
	theme: {
	  extend: {},
	//   colors: {
	// 	// headerFooter: '#000958',
	// 	// textColor: '#f9fafb'

	//   },
	  screens: {
		sm: '480px',
		md: '768px',
		lg: '976px',
		xl: '1440px',
	  },
	},
	plugins: [],
  }
