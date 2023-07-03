/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        'index.html',
        'src/**/*.{html,js,jsx,ts,tsx,vue}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Harmony Sans SC', 'Harmony Sans', ...defaultTheme.fontFamily.sans, 'proportional']
            }
        }
    },
    corePlugins: {
        preflight: false
    },
    plugins: []
}
