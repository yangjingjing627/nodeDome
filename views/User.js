var UserClass = require('./UserClass.js')

function User (name, age, friends) {
  //apply是变量的枚举。所以可以是多个，但是。call传的是数组
  // this.name = name
  UserClass.call(this, name, age, friends)    //call()继承
  this.position = 'top'
}

User.prototype = new UserClass()
User.prototype.abc = function () {

}

module.exports = User
