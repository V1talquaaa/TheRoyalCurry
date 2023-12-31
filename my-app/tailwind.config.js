/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "480px", // mobile
      md: "768px", // tablet
      lg: "1440px", // desktop
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-background': "url('/heroBackground.png')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          md: "40px",
          lg: "80px",
        },
      },
      colors: {
        green: '#253029',
        textLight: '#F8F6DE',
      },
      fontFamily: {
        lobster: ['Lobster Two']
      }
    },
  },
  plugins: [],
}
