// 5. Mirrored Right Triangle - Star Pattern
// Tags: Medium | Nested Loop | Patterns


// Description
// Write a program that takes an integer input n and prints a mirrored right triangle star pattern with n rows. The pattern should be right-aligned, where the stars appear at the right side of the output, and spaces fill the remaining left side of each row.


function printMirroredRightTriangle(n) {
    // Write your logic here
  for(let i=1; i<=n;i++){
    for(let j=n;j>i;j--){
        process.stdout.write("  ")
    }
    for(let k=1;k<=i;k++){
        process.stdout.write("* ")
    }
    console.log()
  }
  
}

module.exports = { printMirroredRightTriangle };