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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head = new ListNode();
        let tail = head;

        while(list2 !== null && list1 !== null) {
            if(list1.val > list2.val) {
                tail.next = list2
                list2 = list2.next
            } else {
                tail.next = list1;
                list1 = list1.next
            }
            tail = tail.next
        }

        tail.next = list1 || list2

    return head.next
    }
}
