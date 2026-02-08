function getSmallestNumberInAnArray(arr){
    let smallest = Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
        }
    }

    return smallest;
}

console.log("Smallest Number in an array", getSmallestNumberInAnArray([2, -6, 4, 8, 1, -9]));