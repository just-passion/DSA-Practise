function getNegativeNumbersCount(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}

console.log("negative number count :", getNegativeNumbersCount([1, -1, -3, 0, -5, 9,10]));