function missingNumber(numArray){
    let n = numArray.length;

    let totalSum = (n * (n+1))/2

    let sum_of_array_items = 0;

    for(let num of numArray){
        sum_of_array_items +=num;
    }

    return totalSum - sum_of_array_items;
}