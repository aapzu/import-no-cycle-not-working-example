const path = require('path');

const tsconfigPath = path.resolve(__dirname, './tsconfig.json');

module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-cycle': ['error', { maxDepth: 10 }],
    'import/no-mutable-exports': 'error',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: tsconfigPath,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: tsconfigPath,
      },
      node: true,
    },
  },
};
