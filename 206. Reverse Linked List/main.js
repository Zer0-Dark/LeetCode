// var reverseList = function (head) {
//     //making the new  linked list
//     class LinkedListNode {
//         constructor(val, next) {
//             this.val = val;
//             this.next = next;
//         }
//     }

//     class LinkedList {
//         constructor() {
//             this.head = null;
//             this.length = 0;
//         }
//         insertAtHead(data) {
//             let newNode = new LinkedListNode(data, this.head)
//             this.head = newNode;
//             this.length++;
//         }
//     }

//     //adding it to the linked list
//     let ll = new LinkedList()
//     while (head) {

//         ll.insertAtHead(head.val)
//         head = head.next;
//     }

//     return ll.head


// };

var reverseList = function (head) {

    // making a class for a node of a linked list
    // i'm making it with a function for now
    class linkedListNode {
        constructor(val, next) {
            this.val = val;
            this.next = next;
        }
    }

    class linkedList {
        constructor() {
            // when init we make the head null and length 0 (no inputs)
            this.head = null;
            this.length = 0;
        }


        insertAtHead(data) {
            // when there's a new input
            // our new node will be made from the data and next will be the head of now
            let newNode = new linkedListNode(data, this.head); //(val,next)
            // now we are setting our new head
            this.head = newNode;
            // since we added a new val the length will be +=1;
            this.length++;

        }

    }

    // now we are writing the code to solve the problem 
    // the code will be that we itrate into the linked list and push it to the new one
    let ourNewLinkedList = new linkedList();

    while (head) {
        //we insert
        ourNewLinkedList.insertAtHead(head.val);
        //then we move 1 step
        head = head.next;
    }


    // we return the new linked list

    return ourNewLinkedList



};