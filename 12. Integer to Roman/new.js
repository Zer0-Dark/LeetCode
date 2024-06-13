// A function that takes a Roman numeral and returns an object with its value and symbol
function romanToObject(roman) {
    // An object that maps Roman symbols to their values
    let map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    // A variable to store the result object
    let result = {
        value: 0,
        symbol: roman
    };

    // Loop through the Roman numeral from left to right
    for (let i = 0; i < roman.length; i++) {
        // Get the current and next symbols
        let current = roman[i];
        let next = roman[i + 1];

        // If the current symbol is smaller than the next one, subtract its value from the result
        if (map[current] < map[next]) {
            result.value -= map[current];
        } else {
            // Otherwise, add its value to the result
            result.value += map[current];
        }
    }

    // Return the result object
    return result;
}


console.log(romanToObject(30))