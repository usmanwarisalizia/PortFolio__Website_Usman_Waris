/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  safelist: [
    'dark:bg-none'
  ],
  extend: {
    boxShadow: {
      'sharp-black': '4px 4px 0 0 rgba(0, 0, 0, 1)',
      'sharp-white': '4px 4px 0 0 rgba(255, 255, 255, 1)',
    },
    colors: {
      darkHover: 'rgba(30, 30, 30, 0.5)', 
    },
    boxShadow: {
      'white': '4px 4px 0 0 rgba(255, 255, 255, 1)', 
    },
    backdropBlur: {
      xs: '2px',
      sm: '4px',
      DEFAULT: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '40px',
      '3xl': '64px',
    },
    blur: {
      xs: '2px',
      sm: '4px',
      DEFAULT: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '40px',
      '3xl': '64px',
    },
    colors: {
      lightHover: '#fcf4ff',
      darkHover: '#2a004a',
      darkTheme: '#11001F',
    },
    fontFamily: {
      ovo: ["var(--font-ovo)", "serif"],
      outfit: ["var(--font-outfit)", "sans-serif"],
    },
    gridTemplateColumns: {
      'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
    }
  },
};
export const plugins = [];