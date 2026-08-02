// 💻 2. Problem: Reverse String
// Description
// You are given a string. Your task is to print the string in reverse order.

/**
 * @param {string} str
 * @return {string}
 */

function reverseString(str) {
    // Write your logic here
    let reverse = ""

    for(let i = str.length-1; i>=0; i--){
        reverse += str[i]
    }
    return reverse
}

module.exports = { reverseString };