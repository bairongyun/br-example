const { getESLintConfig } = require('@bairong/fabric')

module.exports = getESLintConfig('node', {
    rules: {
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-invalid-void-type': 'warn'
    }
})
