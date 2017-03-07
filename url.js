var http = require('http')    //官方提供的http，可以创建一个server
var router = require('./views/router.js')

http.createServer(function (req, res) {    //创建server(req,res)
  // res.writeHead(200, {'Content-Type': 'tetx/html; charset=utf-8'})   //第一个参数200，状态码，第二个参数，传入的是html
  if(req.url !== 'favicon.con') {
    // console.log(req.url);
    // var path = req.url.replace(/\//, '')    //将路由的'/',去掉
    var path = req.url.split('?')[0].replace(/\//, '')    //将路由的'/',去掉

    console.log(path);
    try {                               //先try一个function，如果try失败，就执行catch方法
      router[path](res, req)     //实现路由
    } catch(e) {
      router['home'](res, req)     //设置了默认路由
    }
    // router.home(res)
    // res.end()      //在设置路由router.js的readFile()报错，end()多了

  }
}).listen(8000)                                         //listen(),set监听端口号
console.log('this server is running at http://localhost:8000');   //会打印到控制台
