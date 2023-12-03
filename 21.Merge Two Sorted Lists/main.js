/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let sortedList = [];
    while (list1) {
        sortedList.push(list1.val);
        list1 = list1.next
    }
    while (list2) {
        sortedList.push(list2.val);
        list2 = list2.next
    }
    //**it's better to do one while
    
    sortedList = sortedList.sort((a,b) => a-b); // b - a to reverse it is better
    sortedList = sortedList.reverse(); // no need for this


    class LinkedList {
        constructor() {
            this.head = null; // the head by default is null cause no head at first
            this.length = 0;
        }

        insertAtHead(data) { // this is the method to insert

            let newNode = new LinkedListNode(data, this.head); // define  the new node with the next as the head
            this.head = newNode; // push the node to the head and replace it with the new node
            this.length++; // add one every time we insert
        }
    }


    class LinkedListNode {
        constructor(val, next) {
            this.val = val; // the value = value
            this.next = next; // the next is the next
        }
    }
    let ll = new LinkedList;

    for(let i =0; i < sortedList.length; i++){
        ll.insertAtHead(sortedList[i]);
    }
    return ll.head
};

