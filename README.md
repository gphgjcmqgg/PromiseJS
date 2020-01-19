# PromiseJS

## 区别实例对象与函数对象

## 两种类型的回调函数

### 同步回调

1. 理解：立即执行，完全执行完了才结束，不会放入回调队列中
2. 例子：数组遍历相关的回调函数/ Promise的excutor函数

### 异步回调

1. 理解：不会立即执行，会放入回调队列中将来执行
2. 例子：定时器回调/ ajax回调/ Promise的成功|失败的回调

## JS的error处理

### 错误类型

1. ReferenceError：引用的变量不存在
2. TypeError: 数据类型不正确的错误
3. RangeError:数据值不在其所允许的范围内
4. SyntaxError:语法错误

### 错误处理

1. 捕获错误：try ... catch
2. 抛出错误: throw error

### 错误对象

1. message属性：错误相关信息
2. stack属性：函数调用栈记录信息

## Promise是什么

1. 抽象表达：Promise是JS中进行异步编程的解决方案
2. 具体表达：
从语法上来说：Promise是一个构造函数
从功能上来说：Promise对象用来封装一个异步操作并可以获取其结果

## Promise的状态改变

1. pending变为resolved
2. pending变为rejected

说明：只有这2种，且一个promise对象状态只能改变一次
无论变为成功还是失败，都会有一个结果数据
成功的结果数据一般称为value，失败的结果数据一般称为reason

## Promise的基本流程

new Promise()[pending状态]   -->    执行异步操作
成功了，执行resolve()--> promise对象resolved状态-->then()回调onResolved()-->新的promise对象

失败了，执行reject() -->  promise对象rejected状态-->then/catch()回调onRejected()-->新的promise对象

## 为什么要用Promise

1. 指定回调函数的方式更加灵活
旧的：必须在启动异步任务前指定
promise:启动异步任务=>返回promise对象=>给promise对象绑定回调函数（甚至可以在异步任务结束后指定）

2. 支持链式调用，可以解决回调地狱问题
什么是回调地狱？回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调函数执行的条件
回调地狱的缺点？ 不便于阅读/不便于异常处理
解决方案？promise链式调用
终极解决方案? async/await

## 如何使用promise

