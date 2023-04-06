Function.prototype.apply2 = function (context = window, args) {
    // 避免修改到原对象的属性
    const fn = Symbol('fn')
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;
};
