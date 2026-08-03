// Reverse a Number
// Tags: Easy | Loop | Digit Operations

// Description
// Write a program that accepts a positive integer "n" as input and return the reverse of the number.


function reverseNumber(n) {
    // Write your logic here
    let arr = 0
    let count = 1
    while(n>0){
        arr = (arr*10+(n%10))
        count++
        n = Math.floor(n/10)
    }
     return arr
}
module.exports = { reverseNumber };