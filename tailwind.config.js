/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        peru: 'hsl(22 65% 57%)',
        'chinese-black': 'hsl(0 0% 6%)',
        'anti-flash-white': 'hsl(0 0% 95%)',
        lotion: 'hsl(0 0% 98%)',
        tangelo: 'hsl(21 94% 75%)',
        error: 'hsl(0 65% 49%)',
        grey: 'hsl(0 0% 59%)',
        'hero-black': '#191919',
        'callout-gray': 'hsl(0deg 0% 89%)',
      },
    },

    fontSize: {
      xs: '0.8125rem',
      sm: '0.875rem',
      base: '0.9375rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3.5rem',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
