module.exports = {
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ['airbnb', 'prettier', 'plugin:react/recommended'],
    plugins: ['@babel', 'react', 'react-hooks'],
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-class-properties']
        }
    },
    rules: {
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'react/prop-types': 0,
        'react/sort-comp': 0,
        'react/react-in-jsx-scope': 0,
        'react/state-in-constructor': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-props-no-spreading': 0,
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
