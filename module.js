var http = require('http')    //官方提供的http，可以创建一个server
var User = require('./views/User.js')

http.createServer(function (request, response) {    //创建server(req,res)
  response.writeHead(200, {'Content-Type': 'tetx/html; charset=utf-8'})   //第一个参数200，状态码，第二个参数，传入的是html
  if(request.url !== 'favicon.con') {
    var user1 = new User('ling', '23', ['a', 'b'])
    var user2 = new User('guang', '22', ['c', 'd'])
     user1.friends.push('ccc')
    response.write(user1.name)
    response.write(user1.sayFriends().toString());
    response.write('<br/>');
    response.write(user2.sayFriends().toString());

    // response.write(user1.sayName());

    response.end()                                       //end()作为所有往前端推数据的任务的结束
  }
}).listen(8000)                                         //listen(),set监听端口号
console.log('this server is running at http://localhost:8000');
