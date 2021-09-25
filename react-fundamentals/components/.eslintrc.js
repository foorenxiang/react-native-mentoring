module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'array-callback-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
  },
};
