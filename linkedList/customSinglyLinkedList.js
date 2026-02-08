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

MyLinkedList.prototype.addAtTail = function(val){
    const newNode = new Node(val);
    if(!head){
        this.head = newNode;
    }
    else{
        let current = this.head;
        while(current.next){
            current = current.next;
        }

        current.next = newNode;
    }
    this.size++;
}

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index<0 || index>=this.size) return -1
    if(index === 0) return this.addAtHead(val);
    if(index === this.size) return this.addAtTail(val);
    const newNode = new Node(val);
    let current = this.head;

    for(let i=0;i<index-1;i++){
        current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
}

MyLinkedList.prototype.deleteAtIndex = function(index, val){
    if(index < 0 || index >= this.size) return -1
    if(index === 0) 
        this.head = this.head.next;
    else{
        let current = this.head;
        for(let i=0 ;i<index-1;i++){
            current = current.next;
        }

        current.next = current.next.next;
    }

    this.size--;
}