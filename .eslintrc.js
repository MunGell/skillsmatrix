module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    eqeqeq: ['error', 'smart'],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'no-else-return': 'error',
    'consistent-return': 'error',
    'no-useless-return': 'error',
    'default-case': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/no-deprecated': 0,
    'no-console': 'warn',
    'no-debugger': 'warn',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/first': 'error',
    'import/no-unresolved': 'error',
  },
};
