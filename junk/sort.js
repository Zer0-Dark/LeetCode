

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdoutله
});



let numberA;
rl.question('Enter the first numbeer:', (answer) => {
    numberA = answer;

    let numberB;
    rl.question('Enter the Second numbeer:', (answer) => {
        numberB = answer;

        let numberC;
        rl.question('Enter the third numbeer:', (answer) => {
            numberC = answer;
            let values = [numberA, numberB, numberC].sort((a, b) => a - b)
            for (let i = 0; i < values.length; i++) {
                console.log(values[i])
            }
            console.log("")
            console.log(numberA)
            console.log(numberB)
            console.log(numberC)

            rl.close();
        })
    })
})

