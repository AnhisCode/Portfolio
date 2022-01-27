module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                pepegray: { DEFAULT: "#323232" },
            },
            animation: {
                fadeIn: "fadeIn 2s ease-in forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
            variants: {
                animation: ["motion-safe"],
            },
        },
    },
    plugins: [],
};
