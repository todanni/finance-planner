/** @type {import("prettier").Config} */
const config = {
  arrowParens: "always",
  bracketSameLine: true,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: "never",
  quoteProps: "as-needed",
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: true,
  vueIndentScriptAndStyle: false,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
