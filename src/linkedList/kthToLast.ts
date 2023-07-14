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
    head: LinkedListNode | null

    constructor(headValue: number) {
        const headNode = new LinkedListNode(headValue);
        this.head = headNode;
    }

    showValues(){
        let n: LinkedListNode | null = this.head;

        console.log('start print');
        while (n != null) {
            console.log(`Node Value - ${n.value}`);
            n = n.next;
        }
        console.log('finish print');
    }

    getLength(){
        let n: LinkedListNode | null = this.head;
        let length = 0;

        while (n != null) {
            length += 1;
            n = n.next;
        }

        return length;
    }

    findkthToLast(index: number): number {
        return 1;
    }
}