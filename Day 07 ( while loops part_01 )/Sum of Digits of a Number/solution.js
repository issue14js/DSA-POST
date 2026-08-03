// Sum of Digits of a Number
// Tags: Easy | Loop | Digit Arithmetic

// Description
// Write a program that takes an integer "n" as input and computes the sum of its digits.

// The input number is always positive.


function sumOfDigits(n) {
    // Write your logic here
    let sum = 0;
 while(n>0){
    sum += n%10
      n = Math.floor(n/10) 
    
 }
 return sum
}

module.exports = { sumOfDigits };