module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#ff7716',
      lightPrimary: '#FFEFE3',
      red: '#EC4D3D',
      lightRed: '#FBDBD8',
      orange: '#F19938',
      green: '#7BC467',
      pink: '#DC5558',
      purple: '#A35CD7',
      teal: '#76C7F5',
      blue: '#2F7CF6',
      lightBlue: '#498EF1',
      gray: '#5C6269',
      lightGray: '#F4F5F5',
      white: '#ffffff'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
