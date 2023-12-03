
class LinkedList {
    constructor(){
        this.head = null; // the head by default is null cause no head at first
        this.length = 0;
    }

    insertAtHead(data){ // this is the method to insert
        
        let newNode = new LinkedListNode(data,this.head); // define  the new node with the next as the head
        this.head = newNode; // push the node to the head and replace it with the new node
        this.length++; // add one every time we insert
    }
}


class LinkedListNode{
    constructor(value,next){
        this.value = value; // the value = value
        this.next = next; // the next is the next
    }
}

let ll = new LinkedList()
ll.insertAtHead(10);
console.log(ll)
ll.insertAtHead(20);
console.log(ll)

let test = [1,2,3,4]
Array.isArray(test);
Array.isArray(test);
console.log(Array.isArray(test));