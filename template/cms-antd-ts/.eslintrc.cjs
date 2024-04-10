const { getESLintConfig } = require('@bairong/fabric');

module.exports = getESLintConfig('react-ts', {
    extends: ['prettier'],
    globals: {
        _: true
    },
    rules: {
        // indent: ['error', 4, { SwitchCase: 1 }],
        // 处理保存eslint,prettier缩进冲突
        'indent': 'off',
        '@typescript-eslint/indent': ['off'],
        'no-underscore-dangle': 0,
        'no-use-before-define': 'off',
        'import/no-extraneous-dependencies': 'off',
        // 关闭部分import规则，因为该规则依赖webpack的配置，主要作用于别名等。
        'import/no-self-import': 'off',
        'import/no-duplicates': 'off',
        'import/no-cycle': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        // typescript
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/array-type': 'off',
    },
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        createDefaultProgram: true
    }
});