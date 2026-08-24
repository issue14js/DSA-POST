// Check Distances Between Same Letters

// You are given a 0-indexed string s consisting only of lowercase English letters. Each letter appears exactly twice.

// You are also given a 0-indexed integer array distance of length 26.

// Each letter in the alphabet is numbered from 0 to 25:

// a → 0
// b → 1
// c → 2
// ...
// z → 25


// For each letter, distance[i] tells us the required number of characters between the two occurrences of that letter.

// A string is called well-spaced if, for every letter, the number of characters between its two occurrences is exactly equal to its value in the distance array.

// Return true if s is a well-spaced string; otherwise, return false.

// Example

// Suppose:

// s = "abaccb"


// For the letter a:

// a b a
// ↑   ↑


// There is 1 character between the two as.

// So:

// distance[a] = 1


// For the letter b:

// b a c c b
// ↑       ↑


// There are 3 characters between the two bs.

// So:

// distance[b] = 3


// The same check is performed for every letter.

// Input Format
// A string s containing lowercase English letters.
// An array distance containing 26 integers.
// Output Format

// Return a Boolean value:

// true


// if the string is well-spaced, otherwise:

// false

// Important Point

// If a letter appears at indexes i and j, then the number of characters between them is:

// j - i - 1


// This value should be equal to:

// distance[letter]

class Solution {
  checkDistances(s, distance) {
     let result = true
    for(let i=0;i<s.length;i++){
      for(let j = i+1;j<s.length;j++){
        if(s[i]==s[j]){
         let  dis= j-i-1
         let index = s.charCodeAt(i) - 97
         if(dis!== distance[index]){
          result = false
         }
        }
      }
    
    }
    return result 
    
  }
  
  
}

module.exports = Solution;
