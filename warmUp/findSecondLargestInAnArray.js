function findSecondLargestNumber(arr){
    if(arr.length<2){
        return "Array must have atleast two items";
    }

    let first = -Infinity;
    let second = -Infinity;

    for(let i=0; i< arr.length; i++){
        if(arr[i] > first){
            second = first; 
            first = arr[i];
        }
        else if(arr[i] > second && arr[i]!==first){
            second= arr[i];
        }
    }

    return second === -Infinity ? "No second largest number": second;
}

console.log("Second largest number is :", findSecondLargestNumber([0, 3, 5, 2, 7, 9]));