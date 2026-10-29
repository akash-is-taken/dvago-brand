// Dvago Tailwind v3 preset. Add to `presets` in tailwind.config.js.
module.exports = {
  theme: {
    extend: {
      colors: {
        green: { DEFAULT: "#76BC21", deep: "#4E7D17", forest: "#3F6614", tint: "#EEF7E1", light: "#D6EDB8" },
        charcoal: { DEFAULT: "#303733", deep: "#1F2622" },
        sun: "#F2E31B",
        muted: "#5B5B5B",
        line: "#E8ECF2",
        warning: "#ED8D20",
        error: { DEFAULT: "#CB4B4B", tint: "#FBEDED" },
        input: "#8A918D",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "-apple-system", "Arial", "sans-serif"],
        urdu: ["Noto Nastaliq Urdu", "serif"],
      },
      borderRadius: { DEFAULT: "8px", card: "12px" },
      boxShadow: { card: "0 2px 8px rgba(48,55,51,0.08)" },
    },
  },
};
