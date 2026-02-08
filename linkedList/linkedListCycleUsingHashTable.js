// Given head, the head of a linked list, determine if the linked list has a cycle in it. Return true if there is a cycle; otherwise, return false.

var hasCycle = function(head){
    let seenNodes = new Set();
    let current = head;

    while(current){
        if(seenNodes.has(current))
            return true;
        seenNodes.add(current);
        current = current.next;
    }

    return false;
}