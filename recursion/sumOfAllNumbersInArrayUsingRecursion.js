const arr = [1, 2, 3, 4, 5]

function sumOfAllNumInArray(num){
    if(num === 0) return 0;
    return arr[n] + sumOfAllNumInArray(arr[num-1]);
}

console.log("Sum o fall elements in an array: ", sumOfAllNumInArray(arr.length-1))