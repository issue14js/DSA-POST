// 1. Right Triangle - Star Pattern
// Tags: Easy | Nested Loop | Patterns

// Description
// Write a program that takes an integer n as input and prints a right triangle star pattern with n rows. Each row should contain stars (*) with spaces between them. The number of stars increases as you move from the first row to the nth row.


function printPattern(n) {
    // Write your code here
    for(let i = 1; i<=n;i++){
        for(let j = 1; j<=i;j++){
        process.stdout.write("* ")
        } 
        console.log()
    }
}

module.exports = { printPattern };