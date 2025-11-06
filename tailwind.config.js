/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-light': '#E8D5FF',
        'purple-primary': '#9333EA',
        'purple-dark': '#7C3AED',
      },
    },
  },
  plugins: [],
}

