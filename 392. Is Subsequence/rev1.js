/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = function (s, t) {
    // get the last index of the first char
    let firstChar = s[0];
    // find where is it in the other 
    // console.log(t)
    let lastIndexOfTheFirstChar = t.lastIndexOf(firstChar);
    // console.log(lastIndexOfTheFirstChar)

    // Answer
    // let safe = 0;
    let lasted = lastIndexOfTheFirstChar;
    res = [];
    let firstArr = Array.from(s);
    let secArr = Array.from(t)
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = lasted; j < secArr.length; j++) {
            if (firstArr[i] == secArr[j] ) {
                // console.log("hi", s[i], t[j])
                // console.log(safe, j)
                res.push( secArr[j])
                // safe = j;
                lasted = j+1;
                break;
            }
        }
    }
    // console.log(res, s)
   return res.join("") === s

};