// Harshad Number Check
// Tags: Medium | Loops


// Description
// Write a program to check whether a given number is a Harshad Number or not. A Harshad Number (or Niven Number) is a number that is divisible by the sum of its digits. For example, 18 is a Harshad number because $1 + 8 = 9$, and $18 \% 9 == 0$. 

// helper.js

class Solution {
    checkAbundant(n) {
       let i = 0;
       let sum = 0 
        while(i<n){

            if(n%i==0){ 
                sum += i
            }
            
            i++
        }
          if(sum > n){
            return "Yes"
          }else{return"No"}


    }

}

module.exports = Solution;