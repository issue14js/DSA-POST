// 3. Right Triangle - Alphabet Pattern
// Tags: Easy | Nested Loop


// Description
// Write a program that takes an integer n as input and prints a right triangle alphabet pattern with n rows. Each row should start from 'A' and incrementally print the next letters of the alphabet until the row number is reached.


function printRightTriangleAlphabets(n) {
    for(let i = 1; i<=n;i++){
        for(let j =65; j<=i+64;j++){
            // console.log(j)
            process.stdout.write(String.fromCharCode(j))
            process.stdout.write(" ")

        }
        console.log()
    }
}

module.exports = { printRightTriangleAlphabets };