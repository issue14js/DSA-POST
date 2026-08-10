// You are given a string s containing lowercase English letters, the character '*', and the character '|'.

// The character '|' appears in pairs. Every pair of '|' characters denotes a segment of the string (between that pair) where '*' characters should not be counted.

// Return the number of '*' characters in s that are not between any pair of '|' characters.

// Input Format
// A single line containing the string s.
// Output Format
// Print a single integer: the count of '*' characters that are not between any pair of '|' characters.
// Example
// Input:

// iam|pro**grammer|**rocks

// Output:

// 2

// Here, the ** inside |pro**grammer| are ignored, while the ** outside the | | are counted.



// helper.js (template)
function countAsterisks(s) {
  // Write your logic here
  const arr = s.split('')
  let count = 0
  let insidepair = false
  for(let i =0;i<arr.length;i++){
    if(arr[i]=='|'){
      insidepair = !insidepair
    }else if(arr[i]=='*' && !insidepair){
      count++
    }
  }
  return count


}

module.exports = { countAsterisks };
