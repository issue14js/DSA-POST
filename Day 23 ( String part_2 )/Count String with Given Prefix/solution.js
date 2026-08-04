// Problem 2: Count Strings with Given Prefix
// 📝 Problem Statement:
// You are given an array of strings words and a string pref. Your task is to return the number of strings in words that contain pref as a prefix (i.e., the string starts with pref).

// 📥 Input:
// An array of strings words.

// A string pref representing the target prefix.

// 📤 Output:
// Return an integer representing the count of strings that start with pref.


/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
function countPrefixMatch(words, pref) {
    // Write your code here
    let count = 0

    for(let i=0;i<words.length;i++){
        if(words[i].startsWith(pref)){
            count++
        }
    }
    return count
}

module.exports = { countPrefixMatch };