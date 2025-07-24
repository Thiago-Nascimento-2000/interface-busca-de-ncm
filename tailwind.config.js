   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
        colors: {
          'custom-green-100': 'var(--green-100)',
          'custom-green-50': 'var(--green-50)',
          'custom-black-20': 'var(--black-20)',
          'custom-white': 'var(--white)',
          'cor-logo': 'var(--cor-logo)'
        }
     },
     plugins: [],
   }