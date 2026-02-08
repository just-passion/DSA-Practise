function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5]

console.log("Item present at index: ", linearSearch(arr, 5))