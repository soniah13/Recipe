/** @type {import('tailwindcss').Config} */
export default { 
  content: [ 
      "./index.html", 
      "./src/**/*.{js,ts,jsx,tsx}", 
  ], 
  theme: { 
      extend: {
        backgroundImage: {
          'about': "url('/src/assets/images/allFood + shosh.png')",
          'more': "url('src/assets/images/all foods.jpg')",
        }
      }, 
  }, 
  plugins: [], 
}

