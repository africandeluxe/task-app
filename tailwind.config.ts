import config from "next/config";

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#f5f5dc',
        secondaryBg: '#d3e4cd',
        primaryText: '#556b2f',
        accentTerra: '#e07a5f',
        accentBrown: '#a47148',
        accentMustard: '#e8a87c',
      },
    },
  },
  plugins: [],
};

export default config;