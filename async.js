//1。串行无关联
var async = require('async')

// async.series([   //数组形式
//   function (callback) {
//     //todo
//     callback(null, 'one')
//   },
//   function (callback) {
//     callback(null, 'two')
//   }
// ], function (err, results) {
//   console.log(results);
// })




// console.time('test');
// async.series({              //对象形式
//   one: function (callback) {
//     setTimeout(function () {
//       callback(null, 'one')
//     },1000)
//   },
//   two: function (callback) {
//     setTimeout(function () {
//       callback(null, 'two')
//     },2000)
//   },
// }, function (err, results) {
//   console.log(results);
//   console.timeEnd('test');
// })
//3073,73是程序初始化耗费的


//2.并行无关联,时间短的先执行完
// async.parallel([
//   function (callback) {
//     callback(null, 'one')
//   },
//   function (callback) {
//     callback(null, 'two')
//   }
// ], function (err, results) {
//   console.log(results);
// })

// console.time('test');
// async.parallel({              //对象形式
//   one: function (callback) {
//     setTimeout(function () {
//       callback(null, 'one')
//     },3000)
//   },
//   two: function (callback) {
//     setTimeout(function () {
//       callback(null, 'two')
//     },2000)
//   },
// }, function (err, results) {
//   console.log(results);
//   console.timeEnd('test');
// })

//3.串行有关联
async.waterfall([
  function (callback) {
    callback(null, 'one', 'two')
  },
  function (arg1, arg2, callback) {
    callback(null, arg1, arg2, 'three')   //('one', 'two')=>>(arg1, arg2)
  },
  function (arr1, arr2, arr3, callback) {
    callback(null, [arr1, arr2, arr3, 'four'])    //(arr1, arr2, arr3)=>>((arg1, arg2, 'three'))
    //(null, [arr1, arr2, arr3, 'four'])  =>> [ 'one', 'two', 'three', 'four' ];(null, arr1, arr2, arr3, 'four')  =>> one
  }
],function (err, results) {
  console.log(results);
})
