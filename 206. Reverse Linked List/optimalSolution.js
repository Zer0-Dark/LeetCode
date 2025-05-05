/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

    // we initial prev will be null for now
    let prev = null;
    //the current will be head for now
    let curr = head;

    while (curr) {
        let temp = curr.next;
        curr.next = prev //point instead of next to the prev to reverse it like the draw
        // we move or pointers now to make the curr is next 
        // and the prev is curr onw 
        prev = curr;
        curr = temp;

    }

    return prev; // return the last node we are in
};