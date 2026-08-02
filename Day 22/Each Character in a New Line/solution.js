// 💻 1. Problem: Each Character in a New Line
// Description
// You are given a string. Your task is to print each character of the string on a new line in the same order as it appears.

function printEachChar(str) {
    // Write your logic here
    for(let i = 0; i < str.length; i++){
        console.log(str.charAt(i))
    }
}

module.exports = { printEachChar };