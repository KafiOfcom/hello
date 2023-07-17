const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy middleware configuration
const proxyOptions = {
  target: 'wa-trustnsafety-tech-playground.azurewebsites.net', // Change to your server's actual URL
  changeOrigin: true,
};

// Create the proxy middleware
const proxy = createProxyMiddleware('/', proxyOptions);

// Use the proxy middleware
app.use(proxy);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
