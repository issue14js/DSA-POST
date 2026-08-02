// 💻 3. Problem: Palindromic String (In-place)
// Description
// You are given T test cases. For each test case, you are given a string s. Your task is to check whether the given string is a palindrome using an in-place approach with constant space complexity. A palindrome is a string that reads the same forwards and backwards. If it is a palindrome, print "Yes", otherwise print "No".

function isPalindromeInPlace(str) {
    // Write your code here
    let i = 0
    let j = str.length-1
    let palindrome = "Yes"

    while(i<j){
        if(str[i]!=str[j]){
            palindrome = "No"
            break
        }
        i++
        j--
    }
    return palindrome
}

module.exports = { isPalindromeInPlace };