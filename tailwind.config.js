/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      maxWidth: {
        base: "1280px",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        theme: {
          primary: "#009966",
          foreground: "#020618",
          "muted-foreground": "#62748E",
          muted: "#F1F5F9",
          input: "#E2E8F0",
          "sidebar-border": "#E2E8F0",
          green: "#DCFCE7",
          distructive: "#E7000B",
        },
      },
      backgroundImage: {
        menu: "linear-gradient(112deg, rgba(0, 167, 111, 0.05) 0%, rgba(9, 240, 240, 0.05) 100%);",
      },
    },
  },
  plugins: [],
};
