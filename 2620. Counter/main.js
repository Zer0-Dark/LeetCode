/**
 * @param {number} _n
 * @return {Function} counter
 */
var createCounter = function (n) {
    return function () {
        return n++;
    };
};


console.log(createCounter(1));



const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12

console.log(counter)