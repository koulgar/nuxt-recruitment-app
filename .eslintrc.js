module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': 'error',
    'prefer-const': 'error',
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed', 'methods', 'setup'],
        ignorePublicMembers: false,
      },
    ],
    'nuxt/no-cjs-in-config': 'off',
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
    'jest/globals': true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
