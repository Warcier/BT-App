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
      LightCyan: '#E0FBFC',
      GunMetal: '#293241',
      White: '#FFFFFF',
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
          primary: '#eb5e28',
          secondary: '#ccc5b9',
          accent: '#252422',
          neutral: '#403D39',
          'base-100': '#fffcf2',
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
};
