import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    // Directorios que se deben ignorar
    ignores: ["dist/", "build/", "node_modules/"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "warn",
      eqeqeq: "error",
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
  eslintPluginPrettierRecommended,
]);
