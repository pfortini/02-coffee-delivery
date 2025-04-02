import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'semi': ['error', 'always'],
      'curly': ['error', 'multi-or-nest'],
      'space-before-function-paren': 'off',
      'eqeqeq': 'off',
      'quotes': ['error', 'single', { avoidEscape: true }],
      'object-curly-newline': ['error', { multiline: true }],
      'no-throw-literal': 'off',
      'new-cap': 'off',
      'comma-dangle': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'indent': ['error', 2],
      'padded-blocks': ['error', 'never'],
      'no-unused-vars': ['error', { args: 'none' }],
      'key-spacing': 'error',
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': 'error',
      'space-infix-ops': 'error',
      'space-before-blocks': 'error',
      'keyword-spacing': 'error',
      'prefer-const': 'error',
      'quote-props': ['error', 'consistent-as-needed'],
      'react/react-in-jsx-scope': 'off'
    }
  }
];
