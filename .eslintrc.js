module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb", "plugin:storybook/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-plusplus": "off",
    "object-curly-newline": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "import/no-extraneous-dependencies": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
    "import/no-extraneous-dependencies": ["error", { dependencies: true }],
  },
};
