const prettierConfig = require('./.prettierrc');

module.exports = {
  root: true,
  overrides: [
    {
      files: '*.ts',
      env: {
        es2021: true,
        worker: true,
        jest: true,
      },
      extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
      plugins: ['prettier'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      rules: {
        'prettier/prettier': ['error', prettierConfig],
        'max-nested-callbacks': 'off',
        'import/extensions': ['error', { ts: 'never' }],
        'import/prefer-default-export': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'no-lone-blocks': 'off',
        'no-bitwise': 'off',
        'max-classes-per-file': 'off',
      },
    },
    {
      files: '*.js',
      env: {
        node: true,
      },
      extends: ['airbnb-base', 'prettier'],
      plugins: ['prettier'],
      rules: {
        'prettier/prettier': ['error', prettierConfig],
      },
    },
  ],
  ignorePatterns: ['src/generated/**/*', 'scripts/**/*'],
};
