var mysql = require('mysql')//直接招node-module的mysql的index.js文件，require('mysql')必须与node-module的mysql的名字一致，且node-modules的一个机制，可以找父级的依赖，找到为止，就近原则
var http = require('http')    //官方提供的http，可以创建一个server
var name = require('./views/name')
http.createServer(function (request, response) {    //创建server(req,res)
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})   //第一个参数200，状态码，第二个参数，传入的是html
  // console.log(request.url);
  if(request.url !== 'favicon.con') {
    // response.write('hello NodeJs!')                                              //给前端写内容
    response.write(name.sayName())                                              //给前端写内容
    console.log('Hello NodeJs ~');                            //没有if判断,打印两遍，favicon.ico＝404,有就一遍打印
    response.end()                                       //end()作为所有往前端推数据的任务的结束
  }
}).listen(8000)                                         //listen(),set监听端口号
console.log('Server running at http://localhost:8000');      //nodejs运行的v8引擎，不再提浏览器
//继承的两种方法：1.call 构造函数 2.原型
