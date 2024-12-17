const { join } = require('path');

module.exports = {
  content: [join(__dirname, 'app/**/*.{ts,tsx}')],
  theme: {
    extend: {
      overflow: {
        'auto-hidden': 'auto hidden', // Custom utility
      },
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        primary: {
          light: '#FFDFA6', // Soft sunset glow (pale orange)
          DEFAULT: '#F59E0B', // Sunset orange
          dark: '#D97706', // Deep amber
        },
        secondary: {
          light: '#99DFF6', // Light tropical blue
          DEFAULT: '#3BAFDA', // Calm ocean blue
          dark: '#1D6D91', // Deep water navy
        },
        accent: {
          light: '#FFEDCC', // Warm sandy beige
          DEFAULT: '#F4C078', // Sandy peach
          dark: '#D6A054', // Deep warm sand
        },
        neutral: {
          light: '#E5E7EB', // Soft mist gray
          DEFAULT: '#6B7280', // Balanced medium gray
          dark: '#1F2937', // Charcoal gray
          black: '#111827', // Jet black
        },
        highlight: {
          light: '#FDE047', // Soft lemon yellow
          DEFAULT: '#FACC15', // Golden yellow (sunlit accents)
          dark: '#B45309', // Earthy ochre
        },
        danger: {
          light: '#FEB2B2', // Light coral pink
          DEFAULT: '#F87171', // Warm red (alerts/warnings)
          dark: '#B91C1C', // Deep crimson
        },
        success: {
          light: '#BBF7D0', // Soft mint green
          DEFAULT: '#34D399', // Vibrant sea green
          dark: '#065F46', // Deep jungle green
        },
      },
    },
  },
  plugins: [],
};
