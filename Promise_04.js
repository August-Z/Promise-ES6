/**
 * then 的作用不仅仅是优雅的处理 callback，更多时候，它代表的异步操作的状态
 * 往往我们可以使用它作为一系列异步操作的操作控制，并使用链式操作
 */
(function () {

    Async_01()
        .then(value => {
            console.log(value);
            return Async_02();      // 返回第二个 Promise 对象
        })
        .then(value => {
            console.log(value);
            return Async_03();      // 返回第三个 Promise 对象
        })
        .then(value => {
            console.log(value);
            return '异步执行完成';    // 甚至可以直接返回数据，而不是 Promise 对象
        })
        .then(value => {
            console.log(value);
        });

    function Async_01() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('第一个异步任务执行完成');
                resolve('随便什么数据 01');
            }, 2000);
        });
    }

    function Async_02() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('第二个异步任务执行完成');
                resolve('随便什么数据 02');
            }, 2000);
        });
    }

    function Async_03() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('第三个异步任务执行完成');
                resolve('随便什么数据 03');
            }, 2000);
        });
    }

})();