const http = require('http');

// サーバーの作成
const server = http.createServer((req, res) => {
  // レスポンスの設定
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

// サーバーのポート番号とアドレスの設定
const port = 3000;
const hostname = 'localhost';

// サーバーの起動
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
