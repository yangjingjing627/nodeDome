var fs = require('fs')    //node封装的文件的模块

module.exports = {
  readFileSync: function (res) {
    var data = fs.readFileSync('./templates/main.html', 'utf-8')    //关键是这个路径，相当于fs.js的文件里。路径以被引到的文件为基准
    res.write(data)
  },
  readFile: function (file, res) {
    fs.readFile(file, 'utf-8', function (err, data) {
      res.write(data)
      res.end()
    })
  },
  readImageFile: function (file, res) {
    fs.readFile(file, 'binary', function (err, data) {    //binary,二进制流
      res.write(data)
      res.end()
    })
  },
  writeFile: function (file, res) {
    fs.writeFile(file, 'abc', function (err) {  //写入的文件路径，写入的内容，成功回调
      if (err) throw err;
      res.write('写入成功')
      res.end()
    })
  }
}
