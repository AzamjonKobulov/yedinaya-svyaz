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
        seoul: ["SeoulNamsan CB", "Inter"],
        plus: ["Plus Jakarta Sans", "Inter"],
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
          "sea-blue": "#0FE0C8",
          "chart-4": "#E8C468",
          "chart-5": "#F4A462",
          "primary-foreground": "#F8FAFC",
        },
      },
      backgroundImage: {
        menu: "linear-gradient(112deg, rgba(0, 167, 111, 0.05) 0%, rgba(9, 240, 240, 0.05) 100%);",
        service: "linear-gradient(254.89deg, #009938 0%, #003806 99.55%)",
        card: "linear-gradient(112deg, #00A76F 0%, #09F0F0 100%)",
        cards: "linear-gradient(112deg, #00A76F 0%, #09F0F0 100%)",
      },
      boxShadow: {
        xs: "box-shadow: 0px 1px 2px 0px #0000000D",
      },
      borderRadius: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
