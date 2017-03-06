var http = require('http')    //官方提供的http，可以创建一个server
var file = require('./views/file.js')

http.createServer(function (req, res) {    //创建server(req,res)
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})   //第一个参数200，状态码，第二个参数，传入的是html
  if(req.url !== 'favicon.con') {

    // file.readFileSync(res)
    // file.readFile('./templates/main.html', res)    //异步操作，不需要end()
    // response.end('end---')                                       //end()作为所有往前端推数据的任务的结束
    file.writeFile('./files/test.txt', res)

  }
}).listen(8000)                                         //listen(),set监听端口号
console.log('this server is running at http://localhost:8000');
