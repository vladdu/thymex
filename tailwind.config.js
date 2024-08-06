/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/main/resources/templates/**/*.html'],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        darkTheme: "thymex",
        themes: [
            "light",
            {
                thymex: {
                    "primary": "#14b8a6",
                    "secondary": "#67e8f9",
                    "accent": "#d946ef",
                    "neutral": "#44403c",
                    "base-100": "#111827",
                    "info": "#3b82f6",
                    "success": "#84cc16",
                    "warning": "#facc15",
                    "error": "#f43f5e",
                },
            },
        ],
    },
}
