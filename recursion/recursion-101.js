// Recursion
// Recursion is a technique where a function calls itself to solve a problem by breaking it down into smaller sub-problems.

function printNumbersNToOne(num){
    if(num === 0) return;
    console.log(num);
    printNumbersNToOne(num-1);
}

printNumbersNToOne(5);