export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Custom Hogwarts color palette
        'ink': '#0b0d12',
        'ivory': '#f5f0e3',
        'gold': '#c4a867',
        'amber': '#d9b46a',
        'deep-blue': '#527db2',
        'crimson': '#a83e3e',
        'emerald': '#4a8a5a',
        'sapphire': '#3a6ea5',
        'silver': '#c0c0c0',
        'parchment': '#eae0d2',
        'dark-wood': '#3a2e22',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Garamond"', '"Georgia"', 'serif'],
        display: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}