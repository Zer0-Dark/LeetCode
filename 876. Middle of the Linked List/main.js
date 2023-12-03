let middleNode = function (head) {
    // loop throw the linked list
    let arr = [];
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    // console.log(arr)
    // get the middle
    let mid = 0;
    if (arr.length % 2 === 0) {
        mid = arr.length / 2
    } else {
        mid = (arr.length - 1) / 2

    }
    arr = arr.splice(mid).reverse()
    // make new linked list and return the head
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

    let ll = new LinkedList()
    for (let i = 0; i < arr.length; i++) {
        ll.insertAtHead(arr[i]);
    }

    return ll.head

};
