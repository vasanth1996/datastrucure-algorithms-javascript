/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head || !head.next) return head;
    
    let len = findLength(head);
    let result = new ListNode(0);
    let prev = result;
    let count = len - (len % k);
    
    while(head && count > 0){
        let cur = head;
        let list = null;
        
        for(let i=0;i<k;i++){
            count--;
            let temp = cur.next;
            
            if(!list){
                cur.next = null;
                list = cur;
            }else{
                cur.next = list;
                list = cur;
            }
            
            cur = temp;
        }
        prev.next = list;
        prev = head;
        head = cur;
    }
    
    if(head != null){
        prev.next = head;
    }
    return result.next;
};

var findLength = function(list){
    let count = 0;
    let p1 = list;
    let p2 = list;
    
    while(p2 && p2.next){
        p1 = p1.next;
        p2 = p2.next.next;
        count++;
    }
    
    if(p2){
        count = count * 2 + 1;
    }else{
        count *= 2;
    }
    
    return count;
}
