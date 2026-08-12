// DescriptionYou are given a string s and a character letter. 
// Return the percentage of characters in s that are equal to letter,
// rounded down to the nearest integer.
// Input FormatA string sA single character letterOutput FormatAn integer representing the percentage of letter in s, 
// rounded downExample 1Sample Input:Plaintexthellol
// Expected Output:Plaintext40
// (Explanation: The character 'l' appears 2 times in "hello".
//  Total length is 5. $(2 / 5) \times 100 = 40\%$.)

class Solution {
  percentageLetter(s, letter) {

    if(s.length==0){return 0}

    let count = 0

    for (const c of s) {
      if (c === letter) count++;
    }
     return Math.floor((count/s.length)*100)

  }
}

module.exports = { Solution };
