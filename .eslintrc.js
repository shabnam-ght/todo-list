module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'prefer-destructuring': ['warn', { object: true, array: false }],
    'no-unused-vars': ['warn'],
    'vue/no-v-html': 0,
    'vue/require-default-prop': 0,
    'vue/html-indent': [
      'error',
      'tab',
      { alignAttributesVertically: true }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 20,
        multiline: {
          max: 1
        }
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'any'
        }
      }
    ],
    'vue/multi-word-component-names': ['warn', {
      ignores: ['index']
		  }]
  }
}
