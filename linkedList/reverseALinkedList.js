// Approach:
// Use three pointers: prev, curr, and temp.
// In each step:
// Save the next node.
// Point current node’s next to previous.
// Move prev and curr forward.
// Return prev as the new head.


var reverseList = function(head){
    let prev = null;
    let current = head;

    while(current){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    return prev;
}