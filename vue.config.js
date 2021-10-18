module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({ remUnit: 100 })
      .end()
  },
  devServer: {
    port: 8888
  }
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-plugin-px2rem')({
  //           rootValue: 100,
  //           mediaQuery: false,
  //           minPixelValue: 3
  //         })
  //       ]
  //     }
  //   }
  // }
}
