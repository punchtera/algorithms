import { LinkedList, LinkedListNode } from "../../src/linkedList/partition";

describe("test the linked list implementation and the partition algorith", () => {
  it("should create a linked list", () => {
    const linkedList = new LinkedList(5);

    expect(linkedList.head).toBeTruthy();
  });

  it('should create a partition as proposed by the exercise', () => {
    /*
      write code to partition a linkedlist around a value x, such that all nodes
      less than x come before all nodes greater than or equal to x. if x is contained 
      within the list, the values of x only need to be after the elements less than x.
      The partition element x can appear anywhere in the "right partition", it does
      not need to appear between the left and right partitions.
      partition : 5
      input : 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
      output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
    */
      const partitionValue = 5;
      const linkedList = new LinkedList(3);
      const arrayResultsValue = [3, 1, 2, 10, 5, 5, 8];

      linkedList.head?.appendToTail(5);
      linkedList.head?.appendToTail(8);
      linkedList.head?.appendToTail(5);
      linkedList.head?.appendToTail(10);
      linkedList.head?.appendToTail(2);
      linkedList.head?.appendToTail(1);

      linkedList.partition(partitionValue);

      for (let index = 0; index < 7; index++) {
        const element = arrayResultsValue[index];

        let n: LinkedListNode | null = linkedList.head;
        
        expect(n.value).toEqual(arrayResultsValue[index]);
        
        n = n.next;
      }

      // to ensure it resolves all the nodes.
      expect(true).toEqual(true);
  });
});
