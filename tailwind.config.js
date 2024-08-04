/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/main/resources/templates/**/*.html'],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        //require('daisyui'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
}
