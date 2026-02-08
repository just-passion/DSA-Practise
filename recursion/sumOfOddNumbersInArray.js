const arr = [1, 2, 3, 3, 5];

function sumOfOddNumbersInArray(num){
    let isOdd = arr[num] % 2 !== 0;

    if(num === 0) return isOdd ? arr[0] : 0;
    return (isOdd ? arr[num] : 0) + sumOfOddNumbersInArray(num - 1);
}

console.log("Sum of odd numbers in the array: ", sumOfOddNumbersInArray(arr.length - 1));

function sum(num){
    const isOdd = arr[num] % 2 !== 0;

    if(num === 0) return arr[0];

    return (isOdd ? arr[num] : 0) + sumOfOddNumbersInArray(arr[num-1]);
}

console.log("Sum of odd numbers in the array: ", sum(arr.length - 1));
