module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['server.js'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['db/migrations/*.js', 'db/seeders/*.js'],
      rules: {
        'no-unused-vars': ['error', { argsIgnorePattern: 'Sequelize' }],
      },
    },
    {
      files: 'tests/**/*.js',
      rules: {
        'node/no-unpublished-require': 0,
      },
    },
    {
      files: ['public/js/*.js'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
