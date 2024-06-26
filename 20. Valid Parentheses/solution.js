/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let hashMap = new Map([["]", "["], ["}", "{"], [")", "("]]);

    for (let i = 0; i < s.length; i++) {
        if (hashMap.has(s[i])) {
            if (stack.length && stack[stack.length - 1] == hashMap.get(s[i])) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }

    if (stack.length) {
        return false
    }

    return true


};

console.log(isValid("()[]{}"));