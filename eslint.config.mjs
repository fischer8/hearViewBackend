import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  { ignores: ["node_modules"]},
  { rules: { "no-unused-vars": "off" }},
  {languageOptions: { globals: globals.node }},
  ...tseslint.configs.recommended,
];
