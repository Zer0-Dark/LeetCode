var letterCombinations = function (digits) {
    //return empty if it's empty
    if (digits === "") {
        return [];
    }
    //function to get the possible letters
    function possibleLetters(num) {
        // let lettersArr;
        // convert it to hash map
        let hashTest = new Map();
        hashTest.set("2", ["a", "b", "c"])
        hashTest.set("3", ["d", "e", "f"])
        hashTest.set("4", ["g", "h", "i"])
        hashTest.set("5", ["j", "k", "l"])
        hashTest.set("6", ["m", "n", "o"])
        hashTest.set("7", ["p", "q", "r", "s"])
        hashTest.set("8", ["t", "u", "v"])
        hashTest.set("9",["w", "x", "y", "z"])
        // switch (num) {
        //     case "2":
        //         lettersArr = ["a", "b", "c"];
        //         break;
        //     case "3":
        //         lettersArr = ["d", "e", "f"];
        //         break;
        //     case "4":
        //         lettersArr = ["g", "h", "i"];
        //         break;
        //     case "5":
        //         lettersArr = ["j", "k", "l"];
        //         break;
        //     case "6":
        //         lettersArr = ["m", "n", "o"];
        //         break;
        //     case "7":
        //         lettersArr = ["p", "q", "r", "s"];
        //         break;
        //     case "8":
        //         lettersArr = ["t", "u", "v"];
        //         break;
        //     case "9":
        //         lettersArr = ["w", "x", "y", "z"];
        //         break;
        // }
        return hashTest.get(num);
    }
    // get the combinations 
    if (digits.length === 1) { // if it's one digit
        return possibleLetters(digits);
    } else if (digits.length === 2) { // if it's two digits
        let result = [];
        let firstArr = possibleLetters(digits[0]);
        let secondArr = possibleLetters(digits[1]);
        for (let i = 0; i < firstArr.length; i++) {
            for (let j = 0; j < secondArr.length; j++) {
                result.push(firstArr[i] + secondArr[j]);
            }
        }
        return result;
    } else if (digits.length === 3) { //if it's three digits
        let result = [];
        let firstArr = possibleLetters(digits[0]);
        let secondArr = possibleLetters(digits[1]);
        let thirdArr = possibleLetters(digits[2]);
        for (let i = 0; i < firstArr.length; i++) {
            for (let j = 0; j < secondArr.length; j++) {
                for (let x = 0; x < thirdArr.length; x++) {
                    result.push(firstArr[i] + secondArr[j] + thirdArr[x]);
                }
            }
        }
        return result;
    } else if (digits.length === 4) {
        let result = [];
        let firstArr = possibleLetters(digits[0]);
        let secondArr = possibleLetters(digits[1]);
        let thirdArr = possibleLetters(digits[2]);
        let fourthArr = possibleLetters(digits[3]);
        for (let i = 0; i < firstArr.length; i++) {
            for (let j = 0; j < secondArr.length; j++) {
                for (let x = 0; x < thirdArr.length; x++) {
                    for (let z = 0; z < fourthArr.length; z++) {
                        result.push(firstArr[i] + secondArr[j] + thirdArr[x] + fourthArr[z]);
                    }
                }
            }
        }
        return result;
    }
};
console.log(letterCombinations("32")); 