/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './layout/*.liquid',
        './templates/**/*.json',
        './sections/*.liquid',
        './snippets/*.liquid',
        './assets/*.js'
    ],
    theme: {
        extend: {
            colors: {
                horizon: {
                    bg: '#0f172a',
                    card: 'rgba(255, 255, 255, 0.05)',
                    accent: '#38bdf8',
                    text: '#e2e8f0',
                    muted: '#94a3b8'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif']
            },
            backdropBlur: {
                xs: '2px',
            }
        }
    },
    plugins: [],
}
