// Approach:
// Iterate through the linked list with a current pointer.
// For each node, compare its value with the next node.
// If they are equal, skip the next node using curr.next = curr.next.next.
// Otherwise, move to the next node.

var deleteDuplicates = function(head) {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};