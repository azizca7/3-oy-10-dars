/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#101017",
        "custom-green": "#079211",
        "custom-gray": "#808080",
        "card-gray": "#313131",
      },
    },
  },
  plugins: [],
};
