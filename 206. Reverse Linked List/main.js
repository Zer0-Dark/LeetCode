var reverseList = function (head) {
    //making the new  linked list
    class LinkedListNode {
        constructor(val, next) {
            this.val = val;
            this.next = next;
        }
    }

    class LinkedList {
        constructor() {
            this.head = null;
            this.length = 0;
        }
        insertAtHead(data) {
            let newNode = new LinkedListNode(data, this.head)
            this.head = newNode;
            this.length++;
        }
    }

    //adding it to the linked list
    let ll = new LinkedList()
    while (head) {
    
        ll.insertAtHead(head.val)
        head = head.next;
    }

    return ll.head


};