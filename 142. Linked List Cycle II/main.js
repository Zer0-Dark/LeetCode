/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let detectCycle = function (head) {
    let ptr1;
    let ptr2;
    while(head){
        ptr1 = head.next;
        ptr2 = head.next.next;
        if(ptr1 === ptr2){
            return ptr1
        }else if(ptr2 === null){
            return -1
        }
        head= head.next
    }
    
};