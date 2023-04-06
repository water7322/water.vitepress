function newFunc(fn, ...rest) {
    const obj = {};
    obj.__proto__ = fn.prototype;
    const result = fn.apply(obj, rest);
    if (
        (typeof result === 'object' || typeof result === 'function') &&
        result !== null
    ) {
        return result;
    }
    return obj;
}