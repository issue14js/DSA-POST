// Problem 1: Toggle Alphabet Case
// 📝 Problem Statement:
// You are given a string str. Your task is to toggle the case of every alphabetical character in the string (convert uppercase letters to lowercase and lowercase letters to uppercase). All non-alphabetic characters should remain unchanged.

// 📥 Input:
// A string str containing uppercase letters, lowercase letters, and/or other characters.

// 📤 Output:
// Return a new string with all alphabetic character cases toggled.


/**
 * @param {string} str
 * @return {string}
 */
function toggleCase(str) {
    // Write your code here
     const chars =  str.split('')
    for(let i =0;i<chars.length;i++){
        const code = chars[i].charCodeAt(0)
        if((code>=65 && code<=90 || code>=97 && code<=122)){
            chars[i]= String.fromCharCode(code ^ 32)
        }
    }
    return chars.join('')
}

module.exports = { toggleCase };