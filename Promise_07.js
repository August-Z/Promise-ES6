/**
 * Promise 对象具有 all 方法，所有 then()中的异步任务全部完成将结果集作为数组返回。
 * 有了all，你就可以并行执行多个异步操作，并且在一个回调中处理所有的返回数据。
 * 有一个场景是很适合用这个的，一些游戏类的素材比较多的应用，打开网页时，
 * 预先加载需要用到的各种资源如图片、flash以及各种静态文件。所有的都加载完后，我们再进行页面的初始化。
 */
(function () {

    Promise
        .all([Async_01(), Async_02(), Async_03()])
        .then(result => {
            console.log(result);
            /**
             * Console:
             * 第一个异步任务执行完成
             * 第二个异步任务执行完成
             * 第三个异步任务执行完成
             * ['随便什么数据01','随便什么数据02','随便什么数据03']
             */
        })
        .catch(reason => {
            console.log(reason);
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