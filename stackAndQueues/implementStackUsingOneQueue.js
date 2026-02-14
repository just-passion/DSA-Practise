// Examples
// Example 1:

// Input:[“MyStack”, “push”, “push”, “top”, “pop”, “empty”] [[], [1], [2], [], [], []]

// Output:[null, null, null, 2, 2, false]

// Explanation MyStack myStack = new MyStack(); myStack.push(1); myStack.push(2); myStack.top(); // return 2 myStack.pop(); // return 2 myStack.empty(); // return False


var MyStack = function() {
    this.q = []; 
};

MyStack.prototype.push = function(x) {
    this.q.push(x);
};

MyStack.prototype.pop = function() {
    let n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }
    return this.q.shift();
};

MyStack.prototype.top = function() {
    let n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }
    let front = this.q.shift();
    this.q.push(front);
    return front;
};

MyStack.prototype.empty = function() {
    return this.q.length === 0;
};