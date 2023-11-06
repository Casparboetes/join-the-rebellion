module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  globals: {
    defineProps: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    semi: 'error',
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  ignorePatterns: ['dist/**/*.js'],
  root: true
};
