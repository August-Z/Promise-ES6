(function () {

    Promise
        .race([requestImg(), timeOut()])
        .then(value => {
            console.log(value);
            $('body,html').css({
                backgroundImage: `url(${value})`,
            });
        })
        .catch(reason => {
            alert(reason);
        });

    function requestImg() {
        const p = new Promise(resolve => {
            let img = new Image();
            img.onload = function () {
                resolve(img.src);
            };
            img.src = "http://www.zoushicheng.com/images/back1.jpg";
        });
        return p;
    }

    function timeOut() {
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('图片请求超时');
            }, 5000);
        });
        return p;
    }

})();