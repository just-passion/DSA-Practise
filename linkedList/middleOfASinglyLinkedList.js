// Input: [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node is node 3.
// Input: [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: There are two middle nodes: 3 and 4. We return the second one.

var middleNode = function(head){
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}