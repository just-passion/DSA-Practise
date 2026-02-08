// Merge Sort is a popular divide-and-conquer sorting algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves into one sorted result.
// It is an example of a stable sort that guarantees O(n log n) performance in all cases — best, worst, and average.

function sortArray(arr){
    if(arr.length <=1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = sortArray(arr.slice(0, mid));
    let right = sortArray(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right){
    let res=[]; i=0; j=0;

    while(i<left.length && j<right.length){
        if(left[i]< right[j])
            res.push(left[i++]);
        else
            res.push(right[j++]);
    }
    return[...res, ...left.slice(i), ...right.slice(j)] ///add remaing elements as well as res array
}