import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: ["src/generated/**", "node_modules/**", ".next/**"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["src/generated/**/*"],
  },
];
