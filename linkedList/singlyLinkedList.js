function Node(val1){
    this.val = val;
    this.next = null;
}

function MyLinkedList(){
    this.head = null;
    this.size = 0;
}

const list = new MyLinkedList();

const node1 = new Node(10);
const node2 = new Node(20);

node1.next = node2;
node2.next = null;
list.head = node1;
list.size = 2;

let current = list.head;
while(current!=null){
    console.log(current.val);
    current=current.next;
}