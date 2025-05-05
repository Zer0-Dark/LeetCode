
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {


    let base = init;

    function increment() {
        return ++init;
    }

    function decrement() {
        return --init;
    }

    function rest() {
        init = base;
        return init
    }

    return {
        increment: increment,
        decrement: decrement,
        rest: rest
    }




};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.rest());
console.log(counter.increment());


// console.log(counter.increment());


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */