module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    // "prettier/prettier": "warn",
    'implicit-arrow-linebreak': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-unused-vars': 'off',
    'comma-dangle': 'off',
    'react/jsx-curly-newline': 'off',
    'object-curly-newline': 'off',
    'arrow-body-style': 'off',
    'operator-linebreak': 'off',
    'no-confusing-arrow': 'off',
    quotes: 'off',
    indent: 'off',
  },
};
