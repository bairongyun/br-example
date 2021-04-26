const { getESLintConfig } = require('@bairong/fabric');

module.exports = getESLintConfig('react-ts', {
    rules: {
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-invalid-void-type': 'warn'
    },
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        createDefaultProgram: true
    }
});
