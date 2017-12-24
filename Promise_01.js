/**
 * Promise 是一个构造函数
 * 它接受一个参数是函数，并且传入两个参数 resolve、reject
 * 分别表示异步操作执行成功后的回调函数，与异步操作失败后的回调函数。
 * resolve 是将 Promise 的状态设置为 full filed，
 * reject 是将 Promise 的状态设置为 rejected。
 */
(function () {

    const p = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('执行完成');
            resolve('Query Ok !');
        },2000);

    });

})();