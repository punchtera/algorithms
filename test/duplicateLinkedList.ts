import { LinkedList } from "../src/linkedList";

describe("test the linked list implementation and the duplication algorith", () => {
  it("should create a linked list", () => {
   
    const linkedList = new LinkedList(5);

    expect(linkedList.head).toBeTruthy();
  });
});
