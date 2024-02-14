/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "profile-image": "url('/photo_ljm.jpg')",
        "profile-image-2": "url('/photo_me.jpg')",
        "profile-image-3": "url('/photo_me2.jpg')",
        "kb-image": "url('/photo_kb.jpg')",
        "seoil-image": "url('/photo_seoil_2.jpg')",
        "pol-image": "url('/photo_pol.jpg')",
        "sqld-image": "url('/photo_sqld.jpg')",
        "christ-image": "url('/photo_christ.jpg')",
        "github-image": "url('/photo_github.png')",
        "alg-image": "url('/photo_alg.png')",
        "mockup-image": "url('/mockup.jpg')",
        "mockup-image-2": "url('/smartmockups.jpg')",
      },
    },
  },
  plugins: [],
};
