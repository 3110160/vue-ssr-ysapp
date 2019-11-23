/**
 * Created on 2019/11/6.
 * 服务器代码
 */
//
const path = require('path')
const fs = require('fs')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

const server = express();
server.use(express.static('dist'))
// 服务端执行vue操作
// const bundle = fs.readFileSync(path.resolve(__dirname, './dist/server.bundle.js'), 'utf8')
// 记录js文件的内容
const serverBundle = require(path.resolve(__dirname, './dist/vue-ssr-server-bundle.json'))
// 记录静态资源文件的配置信息
const clientManifest = require(path.resolve(__dirname, './dist/vue-ssr-client-manifest.json'))
// 客户端激活
const template = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: template,
  clientManifest: clientManifest
})

// process.on('unhandledRejection', error => {
//   // Will print "unhandledRejection err is not defined"
//   console.log('unhandledRejection', error.message)
// });

server.get('*', (req, res) => {
  const context = { url: req.url }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
})

server.listen(9000, () => {
    console.log('服务器已启动9000')
})