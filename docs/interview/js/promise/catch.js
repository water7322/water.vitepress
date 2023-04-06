Promise.prototype.catch2 = function (cb) {
    return this.then(undefined, cb);
};
