// Print an X-Shape Pattern
// Tags: Hard | Nested Loop | Patterns


// DescriptionGiven a positive integer $N$ (where $N$ is an odd number), print an X-shaped pattern with $N$ rows.


function printXShapePattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            // Main diagonal (i === j) ya Anti-diagonal (i + j === n - 1) par star (*) print hoga
            if (i === j || i + j === n - 1) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

module.exports = { printXShapePattern };