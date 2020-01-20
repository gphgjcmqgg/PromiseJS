/*  
  自定义Promise函数模块 IIFE
*/

(function(window){
  // Promise构造函数
  // excutor: 执行器函数（同步）
  function Promise(excutor){


  }
  // Promise原型对象的then()
  Promise.prototype.then = function(onResolved, onRejected) {

  }
  // Promise原型对象的catch()
  Promise.prototype.catch = function(onRejected) {
    
  }

  // Promise函数对象resolve方法
  Promise.resolve = function(value) {
    
  }

  
  // Promise函数对象reject方法
  Promise.reject = function(reason) {
    
  }

  // Promise函数对象all方法
  Promise.all = function(array) {
    
  }

   // Promise函数对象race方法
   // 返回一个promise，其结果由第一个完成的promise来决定
  Promise.race = function(array) {
    
  }

  window.Promise = Promise
})(window)