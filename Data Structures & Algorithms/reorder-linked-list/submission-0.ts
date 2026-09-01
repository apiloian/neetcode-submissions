/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        let fast = head.next;
    let slow = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }


    let prev = null;
    let cur = slow.next;
    slow.next = null;

    while(cur) {
        const separeted = cur.next;
        cur.next = prev
        prev = cur
        cur = separeted
    }


    // merge
    let reversed = prev;
    while(reversed) {
        const tmp1 = head.next;
        const tmp2 = reversed.next;

        head.next = reversed;
        reversed.next = tmp1;
        head = tmp1
        reversed = tmp2
    } 

        
    }
}
