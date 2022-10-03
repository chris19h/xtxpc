module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 在方法的形参 () 之前，是否必须有空格
    'space-before-function-paren': 0,
    // 关闭组件命名规则
    'vue/multi-word-component-names': 'off'
  }
}
