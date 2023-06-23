class LinkedListNode {
    next: LinkedListNode | null = null;
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    appendToTail(newValue: number) {
        const newLinkListNode = new LinkedListNode(newValue);
        let n: LinkedListNode = this;

        while (n.next != null) {
            n = n.next;
        }
        n.next = newLinkListNode;
    }
}

export class LinkedList {
    head: LinkedListNode

    constructor(headValue: number) {
        const headNode = new LinkedListNode(headValue);
        this.head = headNode;
    }
}