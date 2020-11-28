module.exports = {
  purge: {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    options: {
      safelist: [
        "bg-pink-900",
        "bg-gray-900",
        "bg-red-900",
        "bg-green-900",
        "bg-yellow-900",
        "bg-blue-900",
        "bg-indigo-900",
        "bg-purple-900",

        "bg-pink-700",
        "bg-gray-700",
        "bg-red-700",
        "bg-green-700",
        "bg-yellow-700",
        "bg-blue-700",
        "bg-indigo-700",
        "bg-purple-700",

        "text-pink-200",
        "text-gray-200",
        "text-red-200",
        "text-green-200",
        "text-yellow-200",
        "text-blue-200",
        "text-indigo-200",
        "text-purple-200",

        "text-pink-300",
        "text-gray-300",
        "text-red-300",
        "text-green-300",
        "text-yellow-300",
        "text-blue-300",
        "text-indigo-300",
        "text-purple-300",
      ],
    },
  },
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Source Code Pro", "monospace"],
    },
  },
  variants: {},
  plugins: [],
};
