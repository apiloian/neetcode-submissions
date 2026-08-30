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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let reverse = null;

        while(head !== null) {
            const temp = head.next;
            head.next = reverse;
            reverse = head;
            head = temp;
        }

        return reverse
    }
}
