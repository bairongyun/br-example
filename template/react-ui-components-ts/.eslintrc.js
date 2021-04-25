module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    parser: '@typescript-eslint/parser',
    extends: ['airbnb', 'prettier', 'plugin:react/recommended', 'plugin:import/typescript'],
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
            }
        }
    ],
    rules: {
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        'react/sort-comp': 0,
        'react/prop-types': 0,
        'react/state-in-constructor': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-filename-extension': 0,
        'react/destructuring-assignment': 0,
        'react/static-property-placement': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/control-has-associated-label': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'no-shadow': 0,
        'consistent-return': 0,
        'no-use-before-define': 0,
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 2
    }
};
