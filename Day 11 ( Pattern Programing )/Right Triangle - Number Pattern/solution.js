// 2. Right Triangle - Number Pattern
// Tags: Easy | Nested Loop | Patterns

// Description
// Write a program that takes an integer n as input and prints a right triangle number pattern with n rows. Each row should start from 1 and print the next integers incrementally until the row number is reached.


function printRightTriangleNumbers(n) {
    // Write your logic here
       for(let i = 1; i<=n;i++){
        for(let j = 1; j<=i;j++){
        process.stdout.write(`${j} `)
        } 
        console.log()
    }
}

module.exports = { printRightTriangleNumbers };