const { join } = require('path');

module.exports = {
  content: [join(__dirname, 'app/**/*.{ts,tsx}')],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
};
