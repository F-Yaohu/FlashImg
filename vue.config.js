const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api' : {
        target: 'https://pic.wswmbot.tk',
        changeOrigin: true,
      },
      '/setu' : {
        target: 'https://pic.wswmbot.tk',
        changeOrigin: true,
      }
    }
  }
})
