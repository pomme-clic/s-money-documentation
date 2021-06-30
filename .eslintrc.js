module.exports = {
  extends: ['@imaginary-cloud/react'],
  parser: 'babel-eslint',
  rules: {
    'react/no-unescaped-entities': 'off',
    'import/no-unresolved': [
      ERROR,
      { ignore: ['^@theme', '^@docusaurus', '^@generated'] },
    ],
    'import/extensions': OFF,
    'padded-blocks': 'always',
  },
}
