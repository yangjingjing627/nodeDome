var files = require('./files.js')
var url = require('url')
var queryString = require('querystring')

module.exports = {       //commonjs把exports、 modile exports都暴露了
  home: function (res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})   //第一个参数200，状态码，第二个参数，传入的是html
    files.readFile('./templates/main.html', res)    //file.js的readFile已经有下面的两行执行代码，所以直接就去掉了
    // res.write('首页')
    // res.end()
  },
  login: function (res, req) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})   //第一个参数200，状态码，第二个参数，传入的是html
    //1.get请求
    // var urlObject = url.parse(req.url, true).query
    // if(urlObject.email && urlObject.password) {
    //   console.log(urlObject)
    //   console.log(urlObject.password)
    // }

    //2.post请求
    var post = ''
    req.on('data', function (chunk) {
      post += chunk    //将信息串起来
    })
    req.on('end', function () {
      var urlObject = queryString.parse(post)
      console.log(urlObject.email)
    })

    files.readFile('./templates/login.html', res)    //file.js的readFile已经有下面的两行执行代码，所以直接就去掉了

  },
  register: function (res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})   //第一个参数200，状态码，第二个参数，传入的是html
    files.readFile('./templates/register.html', res)    //file.js的readFile已经有下面的两行执行代码，所以直接就去掉了
  },
  angular: function (res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})   //第一个参数200，状态码，第二个参数，传入的是html
    files.readFile('./templates/angular.html', res)    //file.js的readFile已经有下面的两行执行代码，所以直接就去掉了
  },
  image: function (res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'})   //第一个参数200，状态码，第二个参数，传入的是html
    files.readImageFile('./images/pet.jpg', res)    //file.js的readFile已经有下面的两行执行代码，所以直接就去掉了,.jpg读取的二进制流
  }
}


  // 1. 单独用exports暴露的话,就得写成exports.router_name = function() {} 的形式

// exports.home = function (res) {
//   res.write('首页')
//   res.end()
// }
//2.  url
// login
// { parse: [Function: urlParse],
//   resolve: [Function: urlResolve],
//   resolveObject: [Function: urlResolveObject],
//   format: [Function: urlFormat],
//   URL:
//    { [Function: URL]
//      originFor: [Function],
//      domainToASCII: [Function],
//      domainToUnicode: [Function] },
//   Url: [Function: Url] }
// favicon.ico
