// Finding Prime Factors of a Number
// Tags: Hard | Loop

// Description
// Write a program to find and print all the prime factors of a given number. A prime factor is a factor that is a prime number. If the number is 0 or 1, print No prime factors.


class Solution {
    primeFactors(n) {
        let copy = n
        let factors = []
        if(n<=1){
            return "No prime factors"
        }
        for(let i=2; i*i<=copy;i++){
            while(copy%i===0){
                factors.push(i)
                copy =  copy/i
            }
        }
            if(copy>1){
                factors.push(copy)
            }
        return factors.join(" ")
        // write your code here
    }
}
module.exports = Solution;