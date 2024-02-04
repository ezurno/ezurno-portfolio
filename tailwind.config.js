/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "profile-image": "url('/photo_ljm.jpg')",
        "kb-image": "url('/photo_kb.jpg')",
        "seoil-image": "url('/photo_seoil_2.jpg')",
        "pol-image": "url('/photo_pol.jpg')",
        "sqld-image": "url('/photo_sqld.jpg')",
      },
    },
  },
  plugins: [],
};
