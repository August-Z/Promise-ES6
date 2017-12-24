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