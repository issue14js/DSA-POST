// Armstrong Number Checker
// Tags: Medium | Loops | Math | Digit Arithmetic

// DescriptionYou are given an integer as input. Your task is to check whether the given number is an Armstrong number or not. An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits.For example: $153 = 1^3 + 5^3 + 3^3 = 153 \rightarrow \text{Armstrong}$$9474 = 9^4 + 4^4 + 7^4 + 4^4 = 9474 \rightarrow \text{Armstrong}$If the number is Armstrong, print "Armstrong", otherwise print "Not Armstrong".


class Solution {
    checkArmstrong(n) {
        let copy = n 
        let arr = []
        let sum = 0
        while(copy>0){
            arr.push(copy%10)
            copy = Math.floor(copy/10)
        }
        arr.map((value)=>{
           let length =  arr.length
            sum+= value**length
        })
        if(sum === n){
        return "Armstrong" 
        }else{return "Not Armstrong" }
    }
}
module.exports = Solution;