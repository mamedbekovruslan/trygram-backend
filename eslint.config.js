import js from '@eslint/js';
import globals from 'globals';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

const recommendedTypescriptRules = typescriptEslint.configs.recommended.rules;

const recommendedJsRules = js.configs.recommended.rules;

export default [
  { ignores: ['dist', 'node_modules', 'coverage'] },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,

      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },

    rules: {
      ...recommendedJsRules,
      ...recommendedTypescriptRules,

      'prettier/prettier': 'error',

      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/explicit-member-accessibility': [
        'warn',
        { accessibility: 'explicit' },
      ],
      '@typescript-eslint/typedef': [
        'error',
        {
          variableDeclaration: true,
        },
      ],
    },
  },
];
