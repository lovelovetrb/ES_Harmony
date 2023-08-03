module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    //    plugins: ["react", "@typescript-eslint", "prefer-arrow"],
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/self-closing-comp": [
            "error",
            {
                component: true,
                html: false,
            },
        ],
        "@typescript-eslint/no-explicit-any": 0,
    },
};
