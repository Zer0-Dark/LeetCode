/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {

    function toBe(val2) {
        if (val2 === val) {
            return true;
        } else {
            throw new Error("Not Equal");
        }
    }

    function notToBe(val2) {
        if (val2 !== val) {
            return true;
        } else {
            throw new Error("Equal");
        }
    }
    return {
        toBe: toBe,
        notToBe: notToBe
    }
};


console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
