/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bgPrimary: '#001232', // background of container
                bgPrimaryLayer: 'rgba(0, 18, 50, 0.8)', //#0A1E5ECC layer of image background
                bgPrimaryBar: 'rgba(5, 17, 63, 1)', // header, navbar, footer, sidebar
                lightPrimary: '#31AFD7', // toggle button, more icon
                borderColor: '#314C81', // button background, border
                gradientStart: 'rgba(255, 67, 67, 0.85)',
                gradientMid: ' #AA52A1',
                gradientStop: '#002DBB',
                disabled: '#AA52A1',
                primary: {
                    100: '#D2E9FF',
                    200: '#A5D3FF',
                    300: '#78BCFF',
                    400: '#4BA6FF',
                    500: '#1E90FF',
                    600: '#1873CC',
                    700: '#125699',
                    800: '#0C3A66',
                    850: '#092B4C',
                    900: '#061D33',
                    950: '#030E19',
                },
                secondary: {
                    50: '#EAF8FE',
                    100: '#D4F0FD',
                    200: '#A1E2FF',
                    300: '#80D4FF',
                    400: '#58C9FC',
                    500: '#0CAAF2',
                    600: '#0084BF',
                    700: '#036A99',
                    800: '#005880',
                    850: '#04364C',
                    900: '#032433', // header,footer, sidebar, modal, top-bar
                    950: '#061E29', // for the bottom layer
                },
                highlight: {
                    50: '#FEF2F2',
                    100: '#FEE2E2',
                    200: '#FECACA',
                    300: '#FCA5A5',
                    400: '#F87171',
                    500: '#EF4444',
                    600: '#DC2626',
                    700: '#B91C1C',
                    800: '#991B1B',
                    900: '#7F1D1D',
                },
            },
            screens: {
                sm: '680px',
                md: '900px',
                lg: '1024px',
                xl: '1366px',
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.default-btn': {
                    'box-shadow': '1px 2px 12px 4px rgba(0,0,0,0.3)',
                },
                '.hover-btn': {
                    'box-shadow': 'inset -1px -2px 4px 0px #04364C',
                },
            })
        }),
    ],
}
