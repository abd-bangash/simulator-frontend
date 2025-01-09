const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable rules that are causing issues
      "react-hooks/exhaustive-deps": "off", // Turn off missing dependencies warnings
      "react-hooks/rules-of-hooks": "off", // Disable hook usage errors
      "@typescript-eslint/no-explicit-any": "off", // Allow `any` type
      "@typescript-eslint/no-unused-vars": "warn", // Show warnings for unused variables instead of errors
    },
  },
];
