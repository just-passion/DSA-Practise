function getLargestNumberInAnArray(arr){
    let largest = -Infinity;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }

    return largest;
}

console.log("Largest Number in the array is: ", getLargestNumberInAnArray( [2, -6, 4, 8, 1, -9]))