// Ye raha poora Problem Statement jo aapne screenshot me share kiya:

// Character Frequency in a String

// Difficulty: Medium

// Description

// Given a string, write a program to count and print the frequency of each alphabetic character present in the string.

// Ignore spaces in the input.
// The output should be sorted alphabetically by character and should not contain any repetitions.
// Input Format
// First line: Integer T (number of test cases)
// Next T lines: Each line contains a single string
// Output Format
// For each test case, print the frequency of characters in sorted order
// One per line in char: count format
// Example 1

// Sample Input:

// 1
// hello

// Expected Output:

// e: 1
// h: 1
// l: 2
// o: 1



function characterFrequency(str) {
    str = str.replace(/\s/g, "").toLowerCase();
    let arr = str.split("")
    arr.sort()
    for(let i =0;i<arr.length;i++){
        if(arr[i]!==undefined){
        let count = 1
        for(let j =i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++
                arr[j]=undefined
            }
        }
         console.log(`${arr[i]}: ${count}`)
        }
    }
}

module.exports = { characterFrequency };