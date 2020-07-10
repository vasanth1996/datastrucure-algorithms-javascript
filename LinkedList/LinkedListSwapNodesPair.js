//Swap nodes in recursion
function swapNodePairs1(head){
    if(!head || !head.next) return head;

    let first = head;
    let second = head.next;

    first.next = swapNodePairs(second.next);
    second.next = first;

    return second;
}

//Swap nodes in iterative approach
function swapNodePairs2(head){
    let result = new ListNode(0);
    let cur = result;
    while(head && head.next){
        let first = head;
        let second = head.next;

        first.next = second.next;
        second.next = first;

        cur.next = second;
        cur = first;
        head = first.next;
    }

    return result.next;
}