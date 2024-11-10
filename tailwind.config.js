/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseLight: '#f9fafb', // Color base para modo claro
        baseDark: '#1f2937',  // Color base para modo oscuro
        cardLight: '#ffffff', // Fondo de cards en modo claro
        cardDark: '#374151',  // Fondo de cards en modo oscuro
        textLight: '#111827', // Color de texto en modo claro
        textDark: '#f3f4f6',  // Color de texto en modo oscuro
      },
    },
  },
  plugins: [],
};


