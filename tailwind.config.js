/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
        'lgMin': {'min': '1023px'},
        // => @media (min-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
        'mdMin': {'min': '767px'},
        // => @media (min-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'smMin': {'min': '639px'},
        // => @media (min-width: 639px) { ... }
      },

      colors: {
        primary: {
          "50":"#eff6ff",
          "100":"#dbeafe",
          "200":"#bfdbfe",
          "300":"#93c5fd",
          "400":"#60a5fa",
          "500":"#3b82f6",
          "600":"#2563eb",
          "700":"#1d4ed8",
          "800":"#1e40af",
          "900":"#1e3a8a"
        },
      },

      boxShadow: {
        'simpleSh': '1px 1px 12px rgba(0, 0, 0, 0.3)',
        'simpleSh+': '1px 1px 12px rgba(0, 0, 0, 0.5)',
        'simpleSh++': '1px 1px 12px rgba(0, 0, 0, 0.7)',
        'simpleSh+++': '1px 1px 12px rgba(0, 0, 0, 0.9)',
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
