Function.prototype.bind2 = function (context = window, ...args) {
    if (typeof this !== 'function') {
        throw new Error('只能由 function 调用');
    }
    const func = this;
    function fBound(...args2) {
        return func.apply(
            this instanceof func ? this : context,
            args.concat(args2)
        );
    }
    fBound.prototype = Object.create(func.prototype);
    return fBound;
};

function test(a, b, c, d) {
    console.log(a, b, c, d);
    this.asd = 'asd';
    console.log('this', this);
    console.log('this', this.constructor);
    // return {
    //     b: 5
    // };
}

const a = {
    z: 'z'
};
const bindTest = test.bind2(a, 1, 2, 3);
bindTest(4);
const newTest = new bindTest(4);
console.log(newTest.asd);
console.log(newTest.b);
console.log(newTest.z);
