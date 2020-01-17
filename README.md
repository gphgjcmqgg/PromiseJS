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
