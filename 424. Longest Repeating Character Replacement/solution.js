/**
 * @param {string} s
 * @return {number}
 */
var characterReplacement = function (s, k) {
    // init the hashmap
    let count = new Map();
    //init the result 
    let res = 0;
    // init the left window 
    let l = 0;
    //init the maxchar
    let maxChar = 0;
    //init the loop with the r of the window

    for (let r = 0; r < s.length; r++) {
        //set the count of the chars in hashMap 
        count.set(s[r], 1 + (count.get(s[r]) || 0));
        // setting the maxChar to the max char rn , this thing we made instead of looping at all the hashMap everytime like this Math.max(...count.values()) to get the max char repated, also we are ignoring  the max char rn we are only getting the maxChar we can get and ignoring if it's lower than the max.  
        maxChar = Math.max(maxChar, count.get(s[r]));
        // if the replacements of the window is bigger than our k
        if ((r - l + 1) - maxChar > k) {
            // we remove one of the count of the current char
            count.set(s[l], count.get(s[l]) - 1);

            // we move the left one step
            l++;
        }

        // we set the result to the max vaild window length 
        res = Math.max(res, r - l + 1);
    }

    return res


};

console.log(characterReplacement("AABABBA", 1));