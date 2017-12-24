/**
 * 我们包装好的函数最后，会 return 出 Promise 对象。
 * 可以直接调用 then、catch 方法，这就是强大之处。
 */
(function () {

    //包装好的函数
    function runAsync() {

        const p = new Promise((resolve, reject) => {
            // 做一些异步操作
            setTimeout(() => {
                console.log('执行完成');
                resolve('Query OK ！');
            }, 2000)
        });

        return p;
    }


    /**
     * then 里面的函数就和我们平时的 callback 一个意思，能在 runAsync() 这个
     * 异步操作执行完成之后被执行。这就是 Promise 的作用，简单来讲，就是能把原来
     * 的回调写法分离出来在异步操作执行完后，用链式调用的方式执行回调函数。
     */
    runAsync().then(data => {
        console.log(data);  // data => resolve()的参数
        // TODO 后面可以用传过来的数据做其他的操作
        // ......
    });


})();