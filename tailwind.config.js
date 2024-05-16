/** @type {import('tailwindcss').Config} */
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
                highlight: '#31D7A9',
            },
            screens: {
                sm: '680px',
                md: '900px',
                lg: '1024px',
                xl: '1366px',
            },
        },
    },
    plugins: [],
}
