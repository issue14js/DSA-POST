// Check if a Number is a Neon Number
// Tags: Easy | Loop

// Description
// Write a Java program that checks if a given number is a Neon number. A Neon number is a number where the sum of the digits of the square of the number is equal to the number itself.


// helper.js

class Solution {
    checkNeon(n) {
        let squre = n*n 
        let arr = []
        let sum = 0
        while(squre>0){
            arr.push(squre%10)
            squre = Math.floor(squre/10)
        }
        arr.map((value)=>{
            sum+=value
        })
        if(sum === n ){
            return "Yes"
        }else{return"No"}
    }
}
module.exports = Solution;