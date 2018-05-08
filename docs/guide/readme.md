# 零散学习
### 订阅账号
- feedly账号： 745252407@qq.com    liumi0905
- instapaper 应该也一样  配合reeder 一起使用

### node n  管理安装 
- $ npm install -g n
- n latest

### VUE
#### 模板语法 ：  
v-bind  v-if  v-for  v-on

```javascript
Vue.component('todo-item', {
  	template: '<li>这是个待办项</li>'
})
```


#### 生命周期：
也有一些其它的钩子，在实例生命周期的不同阶段被调用，如created、mounted、updated 和 destroyed。生命周期钩子的 this 上下文指向调用它的Vue 实例。

- 饿了么案例
  - [git地址1](https://github.com/liangxiaojuan/eleme)
  - [git地址2](https://github.com/QAQXiYangYang/vue-ele)

### typescript
- TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持

- 原始数据的类型  跟在 ：后面   
    - let decLiteral: number = 6;
    - any 类型可被改变
    - let myFavoriteNumber: any = 'seven';
	- myFavoriteNumber = 7;

### webpack	
- 提升打包速度
- 过滤不需要的模块
- 减少包大小：
- 资源静态分析
- 公共css  apiList   只引用当前需要的部分
- 用事件处理  触发公共模块事件 该模块在最初需要被引用一次 全局可触发

	- webpack4    https://www.imooc.com/article/23555?block_id=tuijian_wz

	- happypack在编译过程中除了利用多进程的模式加速编译，还同时开启了cache计算，能充分利用缓存读取构建文件，对构建的速度提升也是非常明显的


### 小技巧
- 千位分隔，金钱格式化
    - 方法1  toLocaleString()
   ```javascript    
    numObj.toLocaleString([locales [, options]])
    var a=1234567894532; 
    var b=673439.4542; 
    console.log(a.toLocaleString()); 
    // "1,234,567,894,532" console.log(b.toLocaleString()); // "673,439.454" （小数部分四舍五入了）
    ```
    - 方法2  
     ```javascript   
    function numFormat(num){
        num=num.toString().split(".");  // 分隔小数点
        var arr=num[0].split("").reverse();  // 转换成字符数组并且倒序排列
        var res=[];
        for(var i=0,len=arr.length;i<len;i++){
        if(i%3===0&&i!==0){
            res.push(",");   // 添加分隔符
        }
        res.push(arr[i]);
        }
        res.reverse(); // 再次倒序成为正确的顺序
        if(num[1]){  // 如果有小数的话添加小数部分
        res=res.join("").concat("."+num[1]);
        }else{
        res=res.join("");
        }
        return res;
    }

    var a=1234567894532;
    var b=673439.4542;
    console.log(numFormat(a)); // "1,234,567,894,532"
    console.log(numFormat(b)); // "673,439.4542"

    // 等价于 
    function formatCash(str) {
        return str.split('').reverse().reduce((prev, next, index) => {
                return ((index % 3) ? next : (next + ',')) + prev
        })
    }

    ```
    2 星级评价
    ```javascript 
    "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
    ```

    3 取随机字符串
    ```javascript 
    Math.random().toString(16).substring(2) 
    Math.random().toString(36).substring(2) 
    ```

    4 取整数
    ```javascript 
    var a = ~~2.33

    var b= 2.33 | 0

    var c= 2.33 >> 0
    ```

    5 最短的代码实现数组去重
    ```javascript 
    [...new Set([1, "1", 2, 1, 1, 3])]
    ```

    6 取出一个数组中的最大值和最小值
    ```javascript 
    var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411]; 
    var maxInNumbers = Math.max.apply(Math, numbers); 
    var minInNumbers = Math.min.apply(Math, numbers);
    ```

    7 将argruments对象转换成数组
    ```javascript 
    var argArray = Array.prototype.slice.call(arguments);
    或者ES6：
    var argArray = Array.from(arguments)
    ```

### 深拷贝
- Object.assign()的拷贝类型十分明显了,这是一种可以对非嵌套对象进行深拷贝的方法,如果对象中出现嵌套情况,那么其对被嵌套对象的行为就成了普通的浅拷贝.
- 如果真的想进行深拷贝,最简单粗暴地方式就是JSON操作.
    - JSON对象中包含两个方法, stringify()和parse(),前者可以将对象JSON化,而后者可以将JSON格式转换为对象.这是一种可以实现深拷贝的方法.
    - 但这种方法的缺陷是会破坏原型链,并且无法拷贝属性值为function的属性


### acync  await 
- async 表示这是一个async函数，await只能用在这个函数里面。
- await表示在这里等待promise返回结果了，再继续执行。await后面跟着的应该是一个promise对象（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了…）
    ```javascript 
    var sleep = function (time) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                // 返回 ‘ok’
                resolve('ok');
            }, time);
        })
    };

    var start = async function () {
        let result = await sleep(3000);
        console.log(result); // 收到 ‘ok’
    };
    ```

    不必写then  回调 可以直接拿到值

    既然.then(..)不用写了，那么.catch(..)也不用写，可以直接用标准的try catch语法捕捉错误。

    await必须在async函数的上下文中

    [文章链接](http://blog.csdn.net/sinat_17775997/article/details/60609498)


    - await 写起来更优雅
    - promise  不能跨层访问值 then一级级下传

### 跨域
- CORS 思想是 是哟哦那个自定义的http头部让浏览器与服务器进行沟通，决定请求或响应的成功与否
    - IE8：XDR（XDomainRequest）

    ```javascript 
    var xdr = new XDomainRequest();
    xdd.onload = ()=>{
        alert(xdd.responseText)
    } 
    xdr.open(‘get’,’http://.......’)
    xdr.send(null) //没有值时必写null

    // 其他浏览器： 通过XMLHttpRequest对象实现的
    在open 中传入的url为绝对URL即可

    xhr.open(‘get’,’’http://……..)

    // 以上不能接收发送cookie 不能拿到相应头部信息

    // 但是xhr可以拿到请求状态  status  支持同步
    ```

- 其他跨域 利用DOM中能够跨域的请求
    - 图像： get请求   单向通信
    - JSONP:  
        动态创建script标签，可以拿到响应信息
		可能存在安全问题  很难知道请求是否失败（script的onerror 属性浏览器支持）

        - 都可以不受限从其他域家在资源
        - CORS与JSONP相比，无疑更为先进、方便和可靠。
    1. JSONP只能实现GET请求，而CORS支持所有类型的HTTP请求。
    2. 使用CORS，开发者可以使用普通的XMLHttpRequest发起请求和获得数据，比起JSONP有更好的错误处理。
    3. JSONP主要被老的浏览器支持，它们往往不支持CORS，而绝大多数现代浏览器都已经支持了CORS（这部分会在后文浏览器支持部分介绍）。

     ```javascript 
    function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // 此时即支持CORS的情况
        // 检查XMLHttpRequest对象是否有“withCredentials”属性
        // “withCredentials”仅存在于XMLHTTPRequest2对象里
        xhr.open(method, url, true);
    
    } else if (typeof!= "undefined") {
    
        // 否则检查是否支持XDomainRequest，IE8和IE9支持
        // XDomainRequest仅存在于IE中，是IE用于支持CORS请求的方式
        xhr = new XDomainRequest();
        xhr.open(method, url);
    
    } else {
    
        // 否则，浏览器不支持CORS
        xhr = null;
    
    }
    return xhr;
    }
    
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
    throw new Error('CORS not supported');
    }
    ```

### web Sockets
- 单独持久的连接上提供全双工，双向通信的信道
- 不采用http协议，使用自定义协议，为快速传输小数据设计，需要不同的web服务器( 非http服务器)

- 协议ws://  加密 wss://
     ```javascript 
    var socket = new WedSocket(‘ws://www.example.com/server.php’)
    // 0 正在建立连接
    // 1 已经建立连接
    // 2 正在关闭连接
    // 3 已经关闭连接

    // 事件：
    // 发送数据： 只接受纯文本 先序列化 JSON.stringify()
    socket.send(‘hello world’)

    //接受数据
    socket.onmessage = function(message){

    }
    // 其他： onopen  on error onclose
    ```    
    

### 知识  编码：
#### escape ：	
- 不对 ASCII 字母、数字进行编码。
- 不对 *@-_+./ 进行编码。
- 其他所有的字符都会被转义序列替换。

#### encodeURI
- 不对 ASCII 字母和数字进行编码。
- 不对 -_.!~*'();/?:@&=+$,# 这20个ASCII 标点符号进行编码。
- 其他所有的字符都会被转义序列替换。

##### escape的不编码集（69个） 是 encodeURI的不编码集（82个） 的子集。

##### escape和encodeURI的百分号编码的根本区别在于，encodeURI是W3C的标准（RFC 3986），而escape是非标准。

- 共同点：
    - 对于需要编码的ASCII字符，将其表示为两个16进制的数字，然后在其前面放置转义字符(%)，置入URI中的相应位置。
- 区别：
    - 标准：对于非ASCII字符, 需要转换为UTF-8字节序, 然后每个字节按照上述方式表示。
    - 非标准：对于非ASCII字符在URI中表示为: %uxxxx, 其中xxxx是用4个十六进制数字表示的Unicode的码位值。

- encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号（;/?:@&=+$,#），所以encodeURIComponent的不编码集只有71个

```javascript
例子：
encodeURIComponent('https://aotu.io/')
// "https%3A%2F%2Faotu.io%2F"

encodeURI('https://aotu.io/')
// "https://aotu.io/"
```
#### ASCII码
- 一个字节（byte） = 8个二进制位（bit）， 因此1 byte可以表示256个字符，从00000000到11111111。 ASCII码的规定是最前面的1位二进制统一规定为0，所以只能表示128个字符编码了。 具体可查看维基百科-ASCII 。

#### Unicode
-  Unicode，中文翻译成万国码、国际码、统一码、单一码。 Unicode只是一个符号集，只规定了符号的二进制代码。 从Unicode的中文翻译上可以看出Unicode与ASCII的区别：Unicode对世界上大部分的文字系统进行了整理、编码，而ASCII只是英文字符。

#### UTF-8
- UTF-8是Unicode的实现方式之一。
    
[文章链接](https://aotu.io/notes/2017/06/15/The-mystery-of-URL-encoding/)


### Reduce

```javascript 
    const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
        listeners = listeners.filter(l => l !== listener);   
        // 这里为了给解除该事件订阅留了个口～
        }
    };

    dispatch({});

    return { getState, dispatch, subscribe };
    };
    // 中间件就是一个函数，对store.dispatch方法进行了改造，在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
```

###  AMD(require.js, 先加载，预加载)  CMD(sea.js  按需加载，懒加载 )标准
- require.js 原理
1. 动态创建script标签加载js资源
2. 递归加载依赖 
3. 定义一个模块时会注册相关的id  依赖等  根据依赖递归加载

[文章](http://foio.github.io/requireJS/)
	
	
### gulp grunt 
- gulp（像写代码一样） 
- grunt（偏向于配置）

- 流：Gulp是一个基于流的构建系统，使用代码优于配置的策略。
- 插件：Gulp的插件更纯粹，单一的功能，并坚持一个插件只做一件事。
- 代码优于配置：维护Gulp更像是写代码，而且Gulp遵循CommonJS规范，因此跟写Node程序没有差别。
- 没有产生中间文件


### webpack(模块加载器＋打包工具) 
[参考资料](http://www.cnblogs.com/vajoy/p/4650467.html)

### Babel
是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。

babel-polyfill
Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，

[参考资料](https://segmentfault.com/a/1190000002452115)



### promise 是什么， 解决什么问题  console.dir(Promise)
1.  是构造函数
2.  Promise是js中用来解决回调嵌套的问题的一套解决方案,增强代码可读性
3.  promise是一套规范和原则，只要设计的库符合规范的要求就都可以算是promise
        如 Promise/A，Promise/B，Promise/D 以及 Promise/A 的升级版 Promise/A+
        promise的使用  promiseA+ 规范
        规范在哪？ 在这~  https://segmentfault.com/a/1190000002452115
4.  怎么用？

    ```javascript
    var promise = new Promise(function(resolve, reject) {
    // 做点什么

    if (/* 如果符合条件 */) {
        resolve("很好，成功！");
    }
    else {
        reject(Error("出错了~"));
    }
    });
    ```
- Promise.all()  
在有些场景下，我们所要处理的多个异步任务之间并没有像上例中的那么强的依赖关系，只需要在这一系列的异步任务全部完成的时候执行一些特定逻辑。这个时候为了性能的考虑等，我们不需要将它们都串行起来执行，并行执行它们将是一个最优的选择当所有 promise/值执行完毕后或有一个发生错误时返回

- Promise.race()  当数组中有一个 resolve 或 reject 时返回
- Promise.then()
- Promise 构造函数包含一个参数和一个带有 resolve（解析）和 reject（拒绝）两个参数的回调。在回调中执行一些操作（例如异步），如果一切都正常，则调用 resolve，否则调用 reject。
 ##### then() 包含两个参数：一个用于成功情形的回调和一个用于失败情形的回调。这两个都是可选的，因此您可以只添加一个用于成功情形或失败情形的回调。
- promise 常用库
    - Q
    - when
    - WinJS
    - RSVP.js

- 浏览器支持情况
    - 在 Chrome 32、Opera 19、Firefox 29、Safari 8 、 Microsoft Edge 
    - 如要使没有完全实现 promise 的浏览器符合规范，或向其他浏览器和 Node.js 中添加 promise，请查看 polyfill（gzip 压缩大小为 2k）。
