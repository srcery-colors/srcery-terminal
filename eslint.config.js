import js from "@eslint/js";
import globals from "globals";

export default [
  {
    // Generated theme artifacts and vendored code are not ours to lint.
    ignores: [
      "**/node_modules/**",
      "blink/**",
      "chrome_secure_shell/**",
      "tilix/**",
      "windows_terminal/**",
    ],
  },
  js.configs.recommended,
  {
    files: ["bin/builder", "**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
];
