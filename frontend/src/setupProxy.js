const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', { 
    target: 'http://localhost:8000',
    changeOrigin: true }))
}

// const express = require('express');
// const proxy = require('http-proxy-middleware');

// const app = express();

// app.use(
//   '/api', // you miss this part in your server code
//   proxy({ target: 'http://localhost:8000', changeOrigin: true })
// );
// app.listen(3000)