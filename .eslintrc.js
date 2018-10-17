module.exports = {
  'extends': [
    'airbnb'
  ],
  'rules': {
    'import/no-unresolved': 'off',
    'prefer-destructuring': ['error', {
      'array': false,
      'object': true
    }],
    'import/extensions': ['error', 'never', { 'packages': 'always' }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'semi': [
      'error',
      'never'
    ],
    'space-before-function-paren': [
      'error',
      'always'
    ],
    'import/prefer-default-export': 'off',
    'no-unneeded-ternary': 'off',
    'comma-dangle': ['error', 'never'],
    'no-control-regex': 0,
    'function-paren-newline': ['error', 'consistent']
  },
  'settings': {
    'import/resolver': {
      'babel-module': {}
    }
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'globals': {
    'PKG': true
  },
  'parser': 'babel-eslint',
  'plugins': [
    'react',
    'jsx-a11y',
    'json'
  ],
  'parserOptions': {
    'sourceType': 'module',
    'allowImportExportEverywhere': false,
    'codeFrame': false,
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
      'experimentalObjectRestSpread': true
    }
  }
}
