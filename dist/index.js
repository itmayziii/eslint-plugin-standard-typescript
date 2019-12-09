module.exports = {
  environments: {
    typescript: {
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: './'
      }
    }
  },
  configs: {
    recommended: {
      plugins: ['standard-typescript', '@typescript-eslint'],
      env: {
        typescript: true
      },
      rules: {
        // Standard turns this rule off.
        '@typescript-eslint/no-use-before-define': 'off',
        // Honestly this is sort of preference, but very much aligns with Standard with no semicolons being used.
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'none',
            requireLast: false
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false
          }
        }],
        // Standard handles indentation.
        '@typescript-eslint/indent': 'off',
        // Standard handles unused vars but it doesn't account for things like Typescript interfaces so we are going to rely on the
        // Typescript '@typescript-eslint/no-unused-vars' rule here instead.
        'no-unused-vars': 'off',
        // Obviously Typescript uses unsupported Node features.
        'node/no-unsupported-features/es-syntax': 'off'
      }
    }
  }
}
