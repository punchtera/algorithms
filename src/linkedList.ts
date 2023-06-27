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

    showValues(){

    }
}

export class LinkedList {
    head: LinkedListNode

    constructor(headValue: number) {
        const headNode = new LinkedListNode(headValue);
        this.head = headNode;
    }

    removeDuplicates() {
        let pointer: LinkedListNode | null = this.head;

        const keyTrackObj: {[k: number]: number} = {};
        let isAnyElementDuplicate = false
        while(pointer !== null){
            let pointerValue: number = pointer.value;
            if(!(pointerValue in keyTrackObj)){
                keyTrackObj[pointerValue] = pointerValue
                isAnyElementDuplicate = true;
                break;
            } 
            pointer =  pointer.next;
        }

        console.log('keyTrackObj', keyTrackObj)
        return isAnyElementDuplicate;
    }
}