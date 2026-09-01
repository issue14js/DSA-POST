// You are given a string s consisting of digits and an integer k.

// A round can be completed if the length of s is greater than k.

// In one round:

// Divide the string into consecutive groups of size k.
// Replace each group with a string representing the sum of its digits.
// Concatenate all resulting strings to form a new string.
// Repeat the process until the length of s is less than or equal to k.

// Return the final string after all rounds.
 class Solution {
    digitSum(s, k) {
        while (s.length > k) {
            let str = s.split("");
            let result = [];
            for (let i = 0; i < str.length; i += k) {
                let group = 0;
                for (let j = i; j < i + k && j < str.length; j++) {
                    group += Number(str[j]); }
                result.push(group); }
            s = result.join(""); }
        return s }}
module.exports = { Solution };