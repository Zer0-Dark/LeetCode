let lengthOfLongestSubstring = function (s) {
    let attempt = 0;
    let arr = [];
    let finalArray = [];
    for (let i = 0; i < s.length; i++) {
        if (!arr.includes(s[i])) {
            arr.push(s[i]);
        } else {
            if (arr.length > finalArray.length) {
                finalArray = arr;
                arr = [];
                i = attempt;
                attempt++;
            } else {
                arr = [];
                i = attempt;
                attempt++;
            }
        }
    }
    if (arr.length > finalArray.length) {
        return arr.length;
    } else {
        return finalArray.length;
    }
}

console.log(lengthOfLongestSubstring("tmmzuxt"));