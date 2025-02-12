import express from 'express';
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(
  '/api',
  createProxyMiddleware({
    target:
      'http://app-prod-load-balancer-1596393594.ap-northeast-2.elb.amazonaws.com',
    changeOrigin: true,
    secure: false,
  })
);

app.listen(3001, () => {
  console.log('Proxy server running on port 3001');
});
