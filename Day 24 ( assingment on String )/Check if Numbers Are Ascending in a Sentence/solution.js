// You are given a string s representing a sentence.

// A sentence is a list of tokens separated by single spaces.

// Each token is either:

// A word consisting of lowercase English letters, or
// A positive number consisting of digits only, with no leading zeros.

// Return true if all numbers in the sentence appear in strictly increasing order from left to right.

// Otherwise, return false.

class Solution {
    areNumbersAscending(s) {
        const str = s.split("");
        let arr = [];
        let result = true;
        for (let i = 0; i < str.length; i++) {
            let val = str[i].trim() === "" ? NaN : Number(str[i]);
            if (!Number.isNaN(val)) {
                arr.push(val);
            }}
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] >= arr[i + 1]) {
                result = false;
            }}
        return result;
    }}
module.exports = { Solution };