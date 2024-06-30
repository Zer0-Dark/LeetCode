/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {

    let stack = [];

    for (let i = 0; i < tokens.length; i++) {

        if (tokens[i] == "+") {
            stack.push(+stack.pop() + +stack.pop())


        } else if (tokens[i] == "-") {
            let last = stack.pop()
            let first = stack.pop()
            stack.push(+first - +last);

        } else if (tokens[i] == "*") {
            stack.push(+stack.pop() * +stack.pop())


        } else if (tokens[i] == "/") {
            let last = stack.pop()
            let first = stack.pop()
            stack.push(Math.trunc(+first / +last));


        } else {
            stack.push(tokens[i]);
        }
    }

    return stack[0];

};


console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))