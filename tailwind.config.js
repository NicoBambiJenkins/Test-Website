export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,.25)",
        soft: "0 15px 45px rgba(0,0,0,.35)"
      },
      backgroundImage: {
        stars:
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,.20), transparent 20%), radial-gradient(circle at 80% 0%, rgba(96,165,250,.18), transparent 24%), radial-gradient(circle at 50% 100%, rgba(29,78,216,.14), transparent 30%)"
      }
    }
  },
  plugins: [],
}