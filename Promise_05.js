/**
 * 到这里，我们对" Promise 是什么玩意"有了最基本的了解，那么 reject 是干嘛的呢？
 * 往往我们的异步操作都会有"失败"的时候，reject 的作用就是把 Promise 的状态设置为
 * rejected，这样我们在 then 中就能捕捉到，然后执行"失败"情况下的回调。
 */
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