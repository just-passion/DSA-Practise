function BinarySearch(arr, item){
    let left = 0;
    let right = arr.length - 1;

    while(right >= left){
        let middle = Math.floor(right - (right - left / 2))

        if(arr[middle] === item)
            return middle;

        else if(item > arr[middle]){
            left = middle + 1;
        }
        else if(item < arr[middle]){
            right = middle - 1
        }
    }
}