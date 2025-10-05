// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firstfont: ['firstfont', 'sans-serif'],
        secondfont: ['secondfont', 'sans-serif'],
        secondfontItalics: ['secondfontItalics', 'sans-serif'],
      },
    },
  },
  plugins: [],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
};
