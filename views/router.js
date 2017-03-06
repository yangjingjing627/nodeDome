var files = require('./files.js')

module.exports = {       //commonjs把exports、 modile exports都暴露了
  home: function (res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})   //第一个参数200，状态码，第二个参数，传入的是html
    files.readFile('./templates/main.html', res)    //file.js的readFile已经有下面的两行执行代码，所以直接就去掉了
    // res.write('首页')
    // res.end()
  },
  login: function (res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})   //第一个参数200，状态码，第二个参数，传入的是html
    files.readFile('./templates/login.html', res)    //file.js的readFile已经有下面的两行执行代码，所以直接就去掉了

  },
  register: function (res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})   //第一个参数200，状态码，第二个参数，传入的是html
    files.readFile('./templates/register.html', res)    //file.js的readFile已经有下面的两行执行代码，所以直接就去掉了

  },
  image: function (res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'})   //第一个参数200，状态码，第二个参数，传入的是html
    files.readImageFile('./images/pet.jpg', res)    //file.js的readFile已经有下面的两行执行代码，所以直接就去掉了,.jpg读取的二进制流
  }
}


  //  单独用exports暴露的话,就得写成exports.router_name = function() {} 的形式

// exports.home = function (res) {
//   res.write('首页')
//   res.end()
// }
