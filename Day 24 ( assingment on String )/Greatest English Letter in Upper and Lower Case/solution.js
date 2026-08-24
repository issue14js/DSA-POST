// Greatest English Letter in Upper and Lower Case

// You are given a string s consisting only of English letters.

// Find the greatest English letter that appears in both:

// lowercase form
// uppercase form

// The letters should be compared in alphabetical order.

// Return the greatest letter in uppercase.

// If no letter appears in both uppercase and lowercase, return an empty string "".

// Example

// Input:

// aAbBcCdDeEfFgGhHiIjJkK


// Both uppercase and lowercase versions of these letters exist:

// A, B, C, D, E, F, G, H, I, J, K


// The greatest letter is:

// K


// So the output is:

// "K"

// Another Example

// Input:

// lEeTcOdE


// Suppose E and e both exist, but L and l do not both exist.

// Then the greatest valid letter is:

// E

// Input Format

// A single string s containing uppercase and lowercase English letters.

// Output Format

// Return:

// The greatest letter that appears in both uppercase and lowercase, converted to uppercase.
// "" if no such letter exists.
// Important Point

// For a letter like g:

// g → lowercase
// G → uppercase


// Both must exist in the string for G to be considered.

// Among all such letters, return the alphabetically greatest one.


// helper.js (template)
function greatestLetter(s) {
  // Write your logic here
 const spl = s.split("")
 let res = s.charCodeAt(0)
  for(let i = 1;i<s.length;i++){
     let k = s.charCodeAt(i)
     if(k>res){
      res = k
     }
  }

  if(res<97){
    return ""

  }
  res = res-32
  // console.log(res)
  result = String.fromCharCode(res)
  return result
}

module.exports = { greatestLetter };
