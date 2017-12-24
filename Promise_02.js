/**
 * 在 Promise_01.js 中我们创建了一个 Promise 对象，但是我们只是 new 了一个对象，
 * 我们传进去的函数就已经执行，这是一个需要注意的细节。所以用 Promise 一般都是包在一个函数中
 * 然后运行这个函数。
 */
(function () {

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

    runAsync(); //调用

})();