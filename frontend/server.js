const express = require('express');
const next = require('next');
const httpProxy = require('http-proxy');

const port = parseInt(process.env.PORT, 10) || 3000;
const targetHost = process.env.BACKEND_HOST || 'http://rails:8000';
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const proxy = httpProxy.createProxyServer();

app.prepare().then(() => {
  const server = express();

  // railsのassets類
  server.use('/assets/*', (req, res) => {
    console.log(`Routing /assets/* to ${targetHost}${req.originalUrl}`);
    proxy.web(req, res, { target: `${targetHost}${req.originalUrl}` });
  });

  // adminは全てrailsで担う
  server.use('/admin/*', (req, res) => {
    console.log(`Routing /admin/* to ${targetHost}${req.originalUrl}`);
    proxy.web(req, res, { target: `${targetHost}${req.originalUrl}` });
  });

  server.use('/users/profile/*', (req, res) => {
    console.log(`Routing /users/profile/* to ${targetHost}${req.originalUrl}`);
    proxy.web(req, res, { target: `${targetHost}${req.originalUrl}` });
  });

  server.use('/timelines/new', (req, res) => {
    console.log(`Routing /timelines/new to ${targetHost}/timelines/new`);
    proxy.web(req, res, { target: `${targetHost}/timelines/new` });
  });

  server.post('/timelines', (req, res) => {
    console.log(`Routing /timelines post to ${targetHost}/timelines`);
    proxy.web(req, res, { target: `${targetHost}` });  // /timelinesをつけ足す必要はない
  });
  
  // 他のHTTPメソッドの/timelinesへのリクエストはNext.jsのハンドラーに渡す
  server.all('/timelines', (req, res) => {
    console.log(`Rouall`);
    if (req.method !== 'POST') {
      return handle(req, res);
    }
  });

  // その他のリクエストはNext.jsのハンドラーに渡す
  server.all('*', (req, res) => {
    console.log(`Passing all other requests to Next.js handler`);
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      console.error('Error starting server:', err);
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});