// Check if Number Has Equal Digit Count and Digit Value

// You are given a string num consisting of digits. For every index i (0-indexed), check whether the digit i occurs exactly num[i] times in num.

// If this condition holds for every index, return true. Otherwise, return false.

// Input: A single string num consisting of digits.
// Output: A boolean value (true or false).

// Example:

// Input: 1210
// Output: true


class Solution {
    /**
     * @param {string} num
     * @return {boolean}
     */
    digitCount(num) {
        let result = true
        for( let i=0; i<num.length;i++){
            let count = 0
            for(let j=0;j<num.length;j++){
            
                if(i==Number(num[j])){
                    count++
                }
            }
            if(count!==Number(num[i])){
                result = false
            }
            
        }
        // Write your code here
        return result
    }
}

module.exports = { Solution };
