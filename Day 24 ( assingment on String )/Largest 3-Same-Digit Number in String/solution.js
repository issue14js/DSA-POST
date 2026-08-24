// Largest 3-Same-Digit Number in String

// You are given a string num representing a large integer.

// A good integer is a substring of num with a length of exactly 3 that consists of the same digit repeated three times.

// For example:

// "777" is a good integer.
// "000" is a good integer.
// "123" is not a good integer.
// "717" is not a good integer.

// Your task is to find the largest good integer present in num.

// If no good integer exists, return an empty string "".

// Example

// Input:

// 6777133339


// Output:

// 777

// Explanation

// The good integers present in the string are:

// 777
// 333


// The largest one is:

// 777

// Input Format

// A single string num consisting only of digits.

// Output Format

// Return the largest good integer as a string. If no good integer exists, return "".




class Solution {
  largestGoodInteger(num) {
    let ans = "";

    for (let i = 0; i < num.length - 2; i++) {
      if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
        let current = num[i] + num[i + 1] + num[i + 2];

        if (current > ans) {
          ans = current;
        }
      }
    }

    return ans;
  }
}

module.exports = Solution;
    