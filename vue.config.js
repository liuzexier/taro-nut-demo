module.exports = {
  publicPath: '.',
  devServer: {
    open: false,
    proxy: {
      '/bs/': {
        target: 'http://192.168.124.9:8080/',
        changeOrigin: true
      }
    }
  }
}