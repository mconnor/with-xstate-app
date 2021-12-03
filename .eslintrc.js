module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // ecmaVersion: 11 (or 2020),  this is set automatically by es2020 setting above
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
    // project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
    'react-hooks',
    'graphql'
  ],
  extends: [
    'plugin:import/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  rules: {
    'react/function-component-definition': [
      2,
      { namedComponents: 'function-declaration' }
    ],
    'react/jsx-key': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/prop-types': 1,
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/require-default-props': 0,

    'import/prefer-default-export': 0,
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true
      }
    ],
    'no-shadow': 'off',
    camelcase: 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useDrawer|useProductVisibility|useDeepCompareEffect)'
      }
    ],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'dot-notation': 'off',
    'no-unused-vars': 'off',

    // 'import/no-extraneous-dependencies': 2,
    'no-use-before-define': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'func-names': ['error', 'always'],
    'react/no-unescaped-entities': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    'global-require': 'warn'
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  // globals: {
  //     React: 'readonly',
  //     JSX: 'readonly',
  // },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './']
      }
    }
  }
}
