# Promise-ES6 小结 
Promise 作为 ES6 最重要的特性之一。用于一个异步操作的最终完成（或失败）及其结果值的表示：即处理异步请求。我们经常会做些承诺，如果我赢了你就嫁给我，如果输了我就嫁给你之类的诺言。这就是promise的中文含义：诺言，一个成功，一个失败！

## Promise 构造函数
一般来说 Promise 对象会作为函数的返回值进行调用，它具有两个参数 resolve 与 reject。我们可以这样封装：
```javascript
function runAsync() {
    const p = new Promise((resolve, reject) => {
        // 执行的异步操作
        setTimeout(()=>{
             resolve('Hello Promise！')
        },2000);
    })
}
```

## resolve 与 reject , then() 与 catch()
这两个参数分别代表了异步任务的成功时的回调与失败时的回调  
**resolve 将 Promise 对象设置为 resolved 状态**  
**reject 将 Promise 对象设置为 rejected 状态**  
它们分别是 then() 与 catch() 的回调函数参数，需要注意的是 then 的第二参数可以是 reject 回调

比如我们将它们都放置于 then() 中
```javascript
(function () {

    /**
     * then 方法可以接受两个参数
     * 第一个对应 resolve 的回调，第二个对应 reject 的回调
     */
    getNumber()
        .then(
            value => {
                console.log('Promise 的状态为：' + 'resolved');
                console.log(value);
            },
            reason => {
                console.log('Promise 的状态为：' + 'rejected');
                console.log(reason);
            }
        );

    function getNumber() {
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                const num = Math.ceil(Math.random() * 10);

                if (num <= 5) {
                    resolve(num);
                } else {
                    reject("数字太大了");
                }

            }, 1000);
        });
        return p;
    }

})();
``` 

或者分别放置于 then() 与 catch() 中，这样做是有好处的！

```javascript
/**
 * catch 方法与 then 方法几乎相同，分别作为调用 resolve 状态与 reject 状态的回调函数
 * 所以 reject 的回调写在 catch 里并与 then 同时链式操作会比较好。
 * 而且 catch 有捕捉异常并处理的机制，这一点将非常好用。类似 try/catch
 */
(function () {

    getNumber()
        .then(value => {
            console.log(value);
            console.log(August);    //此处 August 未定义
        })
        .catch(reason => {
            /**
             * 在resolve的回调中，我们console.log(August);而 August 这个变量是没有被定义的。
             * 如果我们不用Promise，代码运行到这里就直接在控制台报错了，不往下运行了。但是在这里，会得到这样的结果：
             * Console : ReferenceError: August is not defined
             */
            console.log(reason);
        });

    function getNumber() {
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                const num = Math.ceil(Math.random() * 10);

                if (num <= 5) {
                    resolve(num);
                } else {
                    reject("数字太大了");
                }

            }, 1000);
        });
        return p;
    }

})();
```