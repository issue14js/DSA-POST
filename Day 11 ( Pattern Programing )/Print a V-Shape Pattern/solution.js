// 6. Print a V-Shape Pattern
// Tags: Hard | Nested Loop | Patterns

// Description
// Given a positive integer N (minimum value 3), print a V-shaped pattern with N rows. The first and last characters in each row are stars (*).


        
function printVShapePattern(n) {
    
    for (let i = 0; i < n; i++) {
        let line = "";

        line += " ".repeat(i) + "*";
        let spacesBetween = (2 * n - 2) - (2 * i) - 1;
        
        if (spacesBetween > 0) {
            line += " ".repeat(spacesBetween) + "*";
        }
        
        console.log(line);
    }
}

module.exports = { printVShapePattern };