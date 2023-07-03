/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "surfaces-primary-surface": "#f4f9ff",
        "neutrals-grey-10": "#121212",
        mediumslateblue: "#6758ff",
        mediumturquoise: "#46d7d0",
        forestgreen: "#07b445",
        "neutrals-neutral-4": "#999",
        "neutrals-grey-20": "#333",
        "noble-black-400": "#686b6e",
        "neutrals-grey-40": "#666",
        "noble-black-300": "#9b9c9e",
        gray: {
          "100": "#0f1114",
          "200": "rgba(0, 0, 0, 0)",
        },
        "neutrals-grey-100": "#fff",
        gainsboro: "#d9d9d9",
      },
      fontFamily: {
        "body-l-semibold": "'Plus Jakarta Sans'",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "29xl": "48px",
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      lg: "18px",
      "17xl": "36px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
