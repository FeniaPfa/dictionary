/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#a445ed',
                secondary: '#757575',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
