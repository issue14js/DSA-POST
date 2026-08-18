// Strong Password Checker II

// You are given a string password. A password is considered strong if it satisfies all of the following conditions:

// It contains at least 8 characters.
// It contains at least one lowercase English letter (a-z).
// It contains at least one uppercase English letter (A-Z).
// It contains at least one digit (0-9).
// It contains at least one special character from the following string:
// !@#$%^&()-+*

// It does not contain two identical characters consecutively.

// For example:

// Aa1!Aa1!  → true
// Aa1!!a1A  → false


// In Aa1!Aa1!, characters can repeat as long as they are not next to each other.

// Given a string password, return true if it is a strong password. Otherwise, return false.

// Input Format

// A single string password.

// Output Format

// Return a boolean value:

// true


// if the password is strong, otherwise:

// false


class Solution {
  strongPasswordCheckerII(password) {
    if(password.length<8){
      return false
    }
    let result = true
    let hasSpecial = false
    for(let i =1;i<password.length;i++){
      if(password[i]==password[i-1]){result=false}
    }
    for (const c of password) {
      if("!@#$%^&()-+*".includes(c)){
       hasSpecial = true;
      }else{
        hasSpecial = false
      }
    }
     if (!hasSpecial) {
      result = false;
    }
    return result;
  }
}

module.exports = { Solution };
