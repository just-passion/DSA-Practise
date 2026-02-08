//Using recursion
function sumOfFirstNNumbers(num){
    if(num === 0) return 0;
    return num + sumOfFirstNNumbers(num - 1);
}

console.log(" sum of first N numbers: ", sumOfFirstNNumbers(5));