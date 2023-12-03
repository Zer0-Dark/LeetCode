function addTwoNumbers(l1,l2){
    let a1 = Array.from(l1);
    let a2 = Array.from(l2);
    let num1 = a1.reverse().join("");
    let num2 = a2.reverse().join(""); 
    let output = +num1 + +num2;
    output = output.toString().split("").reverse()
    return output;

}


console.log(addTwoNumbers([2,4,3],[5,6,4]));
console.log(addTwoNumbers([2,4,3],[5,6,4]));

// function addTwoNumbers(l1,l2){
    // let num1 = l1.reverse().join("");
    // let num2 = l2.reverse().join("");
    // let output = +num1 + +num2;
    // output = output.toString().split("").reverse()
    // return output;

// }