const sleep = (msec: number) => {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, msec);
    });
};

export default sleep;
