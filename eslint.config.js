const expoConfig = require("eslint-config-expo/flat");
const prettierPlugin = require("eslint-plugin-prettier/recommended");

const resolvedExpoConfig = Array.isArray(expoConfig)
  ? expoConfig
  : (expoConfig.default ?? [expoConfig]);

module.exports = [
  {
    ignores: ["dist/*", ".expo/*", "coverage/*", "node_modules/*"],
  },

  ...resolvedExpoConfig,

  prettierPlugin,

  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
