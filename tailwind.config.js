module.exports = {
  content: [
    './src/**/*.{vue,ts}',
    './renderer/**.*.{vue,ts}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        purple: '#9556FF',
        blue: '#313770',
        orange: '#EF6365',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
