// 4. Inverted Right Triangle - Star Pattern
// Tags: Medium | Nested Loop | Patterns


// Description
// Write a program that takes an integer input n and prints an inverted right triangle star pattern with n rows. The first row should have n stars, and each subsequent row should have one less star than the previous row.

function printPattern(n) {
    // Write your code here
    for(let i=1; i<=n;i++){
        for(let j = n; j>=i;j--){
            process.stdout.write("* ")
        }
        console.log()
        
    }
}

module.exports = { printPattern };