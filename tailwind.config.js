import flowbitePlagin from "flowbite/plugin";
import tailwindcssFilters from "tailwindcss-filters";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 150px 0px rgba(165, 191, 180, 0.42)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(135deg, rgba(124, 111, 207, 0.97) 0%, rgba(116, 174, 170, 0.95) 49.131%, rgb(111, 207, 151) 100%)",
      },
      backgroundColor: {
        "custom-dark-grey": "rgba(48, 45, 45, 0.34)",
      },
      backdropBlur: {
        "30px": "30px",
      },
      colors: {
        customColorBtn: "rgba(242, 242, 242, 0.4)",
        customColorText: "rgb(130, 130, 130);",
      },
      lineHeight: {
        120: "1.2",
      },
    },
    fontFamily: {
      teko: ["Teko", "sans-serif"],
    },
  },
  plugins: [flowbitePlagin, tailwindcssFilters],
};
