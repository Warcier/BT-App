import daisyui from 'daisyui';

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      FloralWhite: '#FFFCF2',
      PaleSilver: '#CCC5B9',
      BlackOlive: '#403D39',
      EerieBlack: '#252422',
      Flame: '#EB5E28',
      BdazzledBlue: '#3D5A80',
      DarkSkyBlue: '#98C1D9',
      LightCyan: '#0891b2',
      GunMetal: '#293241',
      Navbar: '#384D48',
      white: '#ffffff',
      blue: {
        300: '#caf0f8',
        400: '#ade8f4',
        500: '#90e0ef',
        600: '#48cae4',
        700: '#00b4d8',
        800: '#0096c7',
        900: '#0077b6',
        1000: '#023e8a',
      },
      pink: {
        300: '#ffe5d9',
        400: '#fae1dd',
        500: '#fcd5ce',
        600: '#fec5bb',
      },
      green: {
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#add954',
        600: '#9ecf33',
        700: '#97ca22',
      },
      sand: {
        200: '#e4c9b0',
        300: '#e4be9e',
      },

      gray: {
        800: '#1f2937',
      },
      red: {
        500: '#ef4444',
        600: '#dc2626',
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        daisytheme: {
          primary: '#403D39',
          secondary: '#3D5A80',
          accent: '#FFFFFF',
          neutral: '#CCC5B9',
          'base-100': '#FFFFFF',
          info: '#42A2D1',
          success: '#84cc16',
          warning: '#E17509',
          error: '#E22C5A',
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
  extend: {
    transitionDelay: {
      500: '500ms',
    },

    transitionDuration: {
      1000: '1000ms',
    },
  },
};
