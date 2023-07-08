import { LinkedList } from "../src/linkedList";

describe("test the linked list implementation and the duplication algorith", () => {
  it("should create a linked list", () => {
    const linkedList = new LinkedList(5);

    expect(linkedList.head).toBeTruthy();
  });

  it("should test if the result of removing duplicates from a linkedlist and return true", () => {
    const linkedList = new LinkedList(5);

    linkedList.head?.appendToTail(5);
    linkedList.head?.appendToTail(3);

    expect(linkedList.removeDuplicates()).toEqual(false);
    linkedList.showValues();
    expect(linkedList.getLength()).toEqual(2);
  });

  it("should test if the result of removing duplicates from a linkedlist with no repeated elements", () => {
    const linkedList = new LinkedList(5);

    linkedList.head?.appendToTail(2);
    linkedList.head?.appendToTail(3);

    expect(linkedList.removeDuplicates()).toEqual(false);
    expect(linkedList.getLength()).toEqual(3);
  })
});
