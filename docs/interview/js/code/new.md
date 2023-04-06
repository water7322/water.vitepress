1、创建一个以当前函数为原型的空对象 `obj` 。

2、将函数的 `prototype` 赋值给 `obj` 的 `__proto__` 属性。

3、将 `obj` 作为函数的 `this` 传进去。如果有 return 出来的 `result` 是对象的话就直接返回该 `result`，如果不是就返回创建的这个 `obj` 。

<SourceCode src="./new.js" />
