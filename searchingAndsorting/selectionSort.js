// Selection Sort is a simple comparison-based sorting algorithm.
// It divides the array into two parts: a sorted subarray and an unsorted subarray.
// Initially, the sorted part is empty, and the unsorted part is the entire array.
// In each iteration, it finds the minimum element from the unsorted part and moves it to the end of the sorted part.

/* Don't swap like bubble sort, just get the minIndex first and at the end of the loop swap*/


function selectionSort(arr){

    for(let i=0; i<n-1; i++){
        let minIndex = i;
        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[min]){
                minIndex = j;
            }
        }

        if(minIndex != i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp; 
        }
    }

    return arr;
}