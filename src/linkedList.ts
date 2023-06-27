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

    showValues(){
        let n: LinkedListNode | null = this.head;

        console.log('start print');
        while (n != null) {
            console.log(`Node Value - ${n.value}`);
            n = n.next;
        }
        console.log('finish print');
    }

    removeDuplicates() {
        let pointer: LinkedListNode | null = this.head;

        const keyTrackObj: {[k: number]: number} = {};
        let isAnyElementDuplicate = false;

        while(pointer !== null){
            let pointerValue: number = pointer.value;
            if(!(pointerValue in keyTrackObj)){
                keyTrackObj[pointerValue] = pointerValue;
                isAnyElementDuplicate = true;
                let nextNode = pointer.next && pointer.next;
                pointer.next = nextNode && nextNode.next;
                break;
            } 
            pointer =  pointer.next;
        }
        return isAnyElementDuplicate;
    }
}