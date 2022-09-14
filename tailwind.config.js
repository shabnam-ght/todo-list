module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
	colors: {
		white: '#fff',
		"dark-blue":"#166787",
		hover:"#ccc5ee",
		black:"#2D2D2D",
		"light-blue":"#DAECEF",
		sand:"#FCF4EB",
		transparent:"transparent",
		"blue-divider":"#C2E0E5",
		gray: {
			DEFAULT: '#ababab',
			dark: '#111111',
		},

	},
	fontSize:{
		"10px":"10px",
		"16px":"16px",
		"20px": "20px" ,
		"48px":"48px",

	},
	margin:{
		basic:"20px",
	},
	fontWeight: {
		normal: 600,

	},
	borderRadius: {
		"12px":"12px",
		"16px":"16px",
		"20px":"20px",

	},
	padding:{
		7: "7px",
		 11: "11px",
		 16: "16px",
		 24:"24px",
		 40:"40px",
	},
	listStyleType: {
		decimal: 'decimal',
	},
	borderWidth: {
		"2px":"2px",
	},
	display:{
		contents:"contents",
		flex:"flex"
	},
	alignItems:{
		"base-line":"base-line"
	},
	divideStyle:{
		"2px":"2px",
	},
	width:{
"30px":"30%"
	},

  },
  variants: {
    extend: {
		borderWidth: ['hover'],

	},
  },
  plugins: [],
}
