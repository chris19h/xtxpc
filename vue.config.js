const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 那些文件自动引入,使用绝对路径
      // 需要是path.join来拼接完整路径
      patterns: [path.join(__dirname, './src/assets/style/mixins.less'), path.join(__dirname, './src/assets/style/variables.less')]
    }
  }
})
