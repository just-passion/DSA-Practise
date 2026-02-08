function Node(val) {
    this.val = val;
    this.next = null;
}

function MyLinkedList(){
    this.head = null;
    this.size = 0;
} 

MyLinkedList.prototype.get = function(index){
    if(index === 0 || index >= this.size){
        return -1
    }

    let curr = this.head;

    for(let i=0; i<index; i++){
        curr = current.next 
    }

    return curr.val;
} 


MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

My