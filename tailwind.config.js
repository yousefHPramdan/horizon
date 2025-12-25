/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './layout/*.liquid',
        './sections/*.liquid',
        './snippets/*.liquid',
        './templates/*.liquid',
        './templates/*.json',
        './config/*.json',
        './frontend/**/*.{js,ts,jsx,tsx,vue,svelte}'
    ],
    theme: {
        extend: {
            colors: {}
        },
    },
    plugins: [],
}
