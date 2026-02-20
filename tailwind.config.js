/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#7B24A3',
                    light: '#F3E8FF',
                    secondary: '#D8B4FE',
                    card: '#FFFFFF',
                    text: '#1F2937',
                    success: '#22C55E',
                    error: '#EF4444',
                    accent: '#F59E0B'
                }
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'] // Assuming Inter gives a clean, gamified sans-serif look
            }
        },
    },
    plugins: [],
}
