// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
// This process is repeated until the array is sorted.
// After each pass, the largest unsorted element “bubbles up” to its correct position at the end of the array. It’s called “Bubble Sort”
// As smaller elements slowly “bubble” to the top of the list.

function bubbleSort(arr, item){
    let n = arr.length;
    for(let i=0; i<n-1; i++){

        let isSwapped = false;
        for(let j=0; j<n-1-i; j++){ //for iterating through array
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }

            isSwapped = true;
        }

        if(!isSwapped) break;  //is no swapping then array already sorted no need to sort
    }

    return arr;
}