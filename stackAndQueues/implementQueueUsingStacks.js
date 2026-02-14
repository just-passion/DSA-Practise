// Example 1:

// Input:[“MyQueue”, “push”, “push”, “top”, “pop”, “empty”] [[], [1], [2], [], [], []]

// Output:[null, null, null, 1, 1, false]

// Explanation

//     MyQueue myQueue = new MyQueue();
//     myQueue.push(1);    // queue is: [1]
//     myQueue.push(2);    // queue is: [1, 2] 
//     (leftmost is front of the queue)
//     myQueue.peek();     // return 1
//     myQueue.pop();      // return 1, queue is [2]
//     myQueue.empty();    // return false



var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};
MyQueue.prototype.pop = function() {
    if(this.s2.length === 0) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};
MyQueue.prototype.peek = function() {
        if(this.s2.length === 0) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length-1];
    
};
MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;
};
