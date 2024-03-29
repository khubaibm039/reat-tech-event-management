/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                bannerImg:
                    "url('https://thepixelcurve.com/html/exvent/dest/assets/images/bg/hero_bg1.jpg')",
            },
        },
    },
    plugins: [require("daisyui")],
};
