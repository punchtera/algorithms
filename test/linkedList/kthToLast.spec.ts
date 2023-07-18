import { LinkedList } from "../../src/linkedList/kthToLast";

describe("test the linked list kthToLast implementation algorith", () => {
  it("should create a linked list", () => {
    const linkedList = new LinkedList(5);

    expect(linkedList.head).toBeTruthy();
  });

/*  Given a Linked List and a number N, write a function that returns 
    the value at the Nth node from the end of the Linked List. 
    e.g. 
    Input: 1 -> 2 -> 3 -> 4, N = 3
    Output: 2

    Input: 35 -> 15 -> 4 -> 20, N = 4
    Output: 35  */
  it("should producte the expected results", () => {
    const linkedList = new LinkedList(1);

    linkedList.head?.appendToTail(2);
    linkedList.head?.appendToTail(3);
    linkedList.head?.appendToTail(4);

    expect(linkedList.findkthToLast(3)).toEqual(2);
  });

  it("should producte the expected result using another index", () => {
    const linkedList = new LinkedList(35);

    linkedList.head?.appendToTail(15);
    linkedList.head?.appendToTail(4);
    linkedList.head?.appendToTail(20);

    expect(linkedList.findkthToLast(4)).toEqual(35);
  });
});
