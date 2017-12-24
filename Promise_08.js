/**
 * all 方法的效果实际上是"谁跑得慢，以谁为准执行"，那么 race 则是谁跑得快就执行谁。
 * race 用法几乎等同与 all
 */
(function () {

    Promise
        .race([Async_01(), Async_02(), Async_03()])
        .then(value => {
            console.log(value);
            /**
             * 毫无疑问是 Async_01() 最快，但是 then 中只选择了第一名的 resolve
             * Console:
             * 第一个异步任务执行完成
             * 第二个异步任务执行完成
             * 第三个异步任务执行完成
             * 随便什么数据 01
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