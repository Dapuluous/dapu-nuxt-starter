import perfectionist from "eslint-plugin-perfectionist";
import withNuxt from ".nuxt/eslint.config.mjs";

export default withNuxt(
  {
    rules: {
      "object-curly-spacing": ["error", "always"],
      "eol-last": ["error", "always"],
      "no-trailing-spaces": ["error"],
      "require-await": ["error"],
      "vue/html-self-closing": [
        "warn",
        {
          html: {
            void: "always",
            normal: "never",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
    },
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          disallowTypeAnnotations: false,
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
    },
  },
  {
    name: "perfectionist",
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": "error",
      "perfectionist/sort-named-imports": "warn",
      "perfectionist/sort-named-exports": "warn",
      "perfectionist/sort-union-types": "warn",
      "perfectionist/sort-heritage-clauses": "warn",
    },
  },
  {
    name: "nuxt-layers-pages",
    files: ["**/app/pages/**/*.vue", "**/app/error.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
)
  .remove("nuxt/import/rules")
  .override(
    "nuxt/stylistic",
    {
      rules: {
        "@stylistic/quotes": ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
        "@stylistic/indent": ["error", 2, { ImportDeclaration: "first" }],
        "@stylistic/array-bracket-newline": ["error", { multiline: true }],
        "@stylistic/array-element-newline": ["error", { consistent: true }],
        "@stylistic/object-curly-newline": [
          "error",
          {
            ObjectExpression: {
              consistent: true,
              multiline: true,
              minProperties: 4,
            },
            ObjectPattern: {
              consistent: true,
              multiline: true,
              minProperties: 4,
            },
            TSInterfaceBody: "always",
            TSTypeLiteral: {
              consistent: true,
              multiline: true,
              minProperties: 4,
            },
            ImportDeclaration: {
              consistent: true,
              multiline: true,
              minProperties: 4,
            },
            ExportDeclaration: {
              consistent: true,
              multiline: true,
              minProperties: 4,
            },
          },
        ],
        "@stylistic/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true, allowMultiplePropertiesPerLine: false }],
      },
    },
  );
