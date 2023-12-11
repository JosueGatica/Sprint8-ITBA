/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#DB5860'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 40px 70px -17px rgba(0, 0, 0, 0.4)',
      },
      screens: {
        'xsm' : '320px',
        'xmm': '375px',
        'xml': '475px'
      }
    },
  },
  plugins: [require("daisyui")],
}

