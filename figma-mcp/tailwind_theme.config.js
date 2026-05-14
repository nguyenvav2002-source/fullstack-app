/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../frontend/src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        app: {
          bg: "#F6F8FA",
          surface: "#FFFFFF",
          text: "#172033",
          muted: "#586174",
          border: "#DDE3EA",
          primary: "#2563EB",
          primaryHover: "#1D4ED8",
          success: "#14804A",
          error: "#C2410C",
          disabled: "#AEB7C4"
        }
      },
      borderRadius: {
        panel: "8px",
        control: "6px"
      },
      spacing: {
        page: "32px",
        panel: "32px"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      fontSize: {
        title: ["40px", { lineHeight: "48px", fontWeight: "700" }],
        body: ["16px", { lineHeight: "24px" }],
        label: ["13px", { lineHeight: "18px", fontWeight: "600" }]
      }
    }
  },
  plugins: []
};
