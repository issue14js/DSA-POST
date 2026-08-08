// Capitalize First and Last Character of Each Word

// Difficulty: Medium

// Description

// Given a space-separated sentence, your task is to split it into individual words and capitalize both the first and last characters of each word. Return the modified sentence where every word has its first and last characters capitalized.

// Input Format
// First line: T (number of test cases)
// Then T follow, each with a single sentence string
// Output Format

// For each test case, output the transformed sentence with capitalized first and last characters of each word.

// Examples 1:

// Sample Input:

// 2
// java is fun
// HELLO FRIENDS

// (Expected Output us Sample Input ke aage screenshot me cut ho gaya hai — agar wo bhi chahiye to niche thoda scroll karke uska screenshot bhej dena.)



function capitalizeEnds(str) {
    // Write your code here
    let chars = str.split(" ")
    for(let i =0;i<chars.length;i++){
        let char = chars[i]
        char.slice()
          let first = char.charCodeAt(0)
          let last = char.charCodeAt(char.length-1)
        if(first>=97 && first<=122){
            char = char[0].toUpperCase() + char.slice(1);
        }
        if(last>=97 && last<=122){
            let g = last-32
            let lastALPHA = String.fromCharCode(g)
            char= char.slice(0,-1) + lastALPHA  
        }
        chars[i] = char
    }
    return chars.join(" ")
}
module.exports = { capitalizeEnds };