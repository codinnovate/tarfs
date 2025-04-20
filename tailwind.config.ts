/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
	  extend: {
		colors: {
		  'tarf-pink': '#E61F94',
		  'tarf-pink-dark': '#EB006C',
		  'tarf-pink-light': '#FF6EB5',
		  'tarf-pink-lighter': '#FFD1E6',
		  'tarf-pink-lightest': '#FFF0F7',
		},
		backgroundImage: {
		  'hero-pattern': "url('https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
		  'diagonal-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E61F94' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
		  'dot-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E61F94' fill-opacity='0.07' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
		},
		animation: {
		  'fade-in': 'fadeIn 1.5s ease-in-out',
		  'slide-up': 'slideUp 0.5s ease-out',
		  'zoom-in': 'zoomIn 0.5s ease-out',
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		  slideUp: {
			'0%': { transform: 'translateY(20px)', opacity: '0' },
			'100%': { transform: 'translateY(0)', opacity: '1' },
		  },
		  zoomIn: {
			'0%': { transform: 'scale(0.95)', opacity: '0' },
			'100%': { transform: 'scale(1)', opacity: '1' },
		  },
		},
	  },
	},
	plugins: [],
  };