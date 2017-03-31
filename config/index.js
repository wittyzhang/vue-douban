// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  // 构建产品时使用的配置
  build: {
    // webpack的编译环境
    env: require('./prod.env'),
    // 编译输入的index.html文件
    index: path.resolve(__dirname, '../dist/index.html'),
    // webpack输出的目标文件夹路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // webpack编译输出的二级文件夹
    assetsSubDirectory: 'static',
    // webpack编译输出的发布路径
    assetsPublicPath: '/',
    // 使用 SourceMap
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false, // 默认不打卡开启gzip模式
    // gzip模式下需要压缩的文件的扩展名
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  // 开发过程中使用的配置
  dev: {
    // webpack的编译环境
    env: require('./dev.env'),
    // dev-server监听的端口
    port: 8080,
    // 启动dev-server之后自动打开浏览器
    autoOpenBrowser: true,
    // webpack编译输出的二级文件夹
    assetsSubDirectory: 'static',
    // webpack编译输出的发布路径
    assetsPublicPath: '/',
    // 这个参数主要是一个地址映射表，你可以通过设置将复杂的url简化
    proxyTable: {
      '/v2/movie/coming_soon': {
        target: 'http://api.douban.com',
        changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务端接收你的请求并代你发送该请求，这样就不会有跨域问题了，当然这只适用于开发环境
        pathRewrite: {
          '^v2/movie/coming_soon': '/v2/movie/coming_soon'
        }
      },
      '/v2/movie/top250': {
        target: 'http://api.douban.com',
        changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务端接收你的请求并代你发送该请求，这样就不会有跨域问题了，当然这只适用于开发环境
        pathRewrite: {
          '^v2/movie/top250': '/v2/movie/top250'
        }
      },
      '/v2/movie/in_theaters': {
        target: 'http://api.douban.com',
        changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务端接收你的请求并代你发送该请求，这样就不会有跨域问题了，当然这只适用于开发环境
        pathRewrite: {
          '^v2/movie/in_theaters': '/v2/movie/in_theaters'
        }
      }, 
      '/v2/movie/subject/': {
        target: 'http://api.douban.com',
        changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务端接收你的请求并代你发送该请求，这样就不会有跨域问题了，当然这只适用于开发环境
        pathRewrite: {
          '^v2/movie/subject/': '/v2/movie/subject/'
        }
      },
      '/v2/book': {
        target: 'https://api.douban.com',
        changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务端接收你的请求并代你发送该请求，这样就不会有跨域问题了，当然这只适用于开发环境
        pathRewrite: {
          '^v2/book': '/v2/book'
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false // 是否开启cssSourceMap
  }
}
