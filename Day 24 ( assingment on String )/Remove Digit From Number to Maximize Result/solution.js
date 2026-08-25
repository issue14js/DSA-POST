// Remove Digit From Number to Maximize Result

// You are given a string number representing a positive integer and a character digit. You can remove exactly one occurrence of digit from number.

// Return the resulting string after removing one occurrence of digit such that the resulting number is as large as possible.

// Input:

// First line: A string number representing a large integer.
// Second line: A character digit.

// Output: A string representing the maximum possible number after removing one occurrence of digit.




class Solution {
  removeDigit(number, digit) {
    // Write your code here
    const nums = number.split("")
    for(let i = 0;i<nums.length;i++){
      if(nums[i]==digit){
        nums.splice(i,1)
        break
      }
    }
    return nums.join("")
  }
}

module.exports = { Solution };
