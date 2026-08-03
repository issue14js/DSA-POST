// Check if a Number is Automorphic
// Tags: Easy | Loop

// Description
// A number is called an Automorphic number if its square ends with the number itself.

// For example: 25 is Automorphic because: $25^2 = 625$. The last two digits are 25 (which matches the number itself).  

// Write a program that accepts a positive integer $n$ and checks whether it is an Automorphic number.  

// If $n$ is an Automorphic number, print "Yes".  

// Otherwise, print "No".


function isAutomorphic(n) {
    // Write your logic here
    while(n>0){
       let = square = n*n
       
       let digits = n.toString().length
       
       let lastdigits = square % (10 **digits)

        if(lastdigits === n){
            return "Yes"
        }else{
        return "No"
        }
    }
}

module.exports = { isAutomorphic };
