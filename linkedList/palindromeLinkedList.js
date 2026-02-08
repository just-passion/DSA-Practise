// Approach1

// Traverse the linked list and store values in an array.
// Check whether the array is a palindrome by comparing elements from start and end moving towards the center.

var isPalindrome = function(head){
    let arr = [];
    let current = head;

    while(current !== null){
        arr.push(current.val);
        current = current.next
    }

    let left = 0; 
    let right = arr.length -1;

    while(left < right){
        if(arr[left++] !== arr[right--]){
            return false;
        }
    }

    return true;
}

// Approach2
// Use two pointers (slow and fast) to find the middle of the linked list.
// Reverse the second half of the list.
// Compare the first and second halves node by node.

var isPalindrome = function(head) {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse second half
    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // Compare two halves
    let first = head, second = prev;
    while (second) {
        if (first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }

    return true;
};