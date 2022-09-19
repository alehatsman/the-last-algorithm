import LinkedList from "@code/DoublyLinkedList";
import { test_list } from "./ListTest";

describe("DoublyLinkedList", function () {
  test("append", () => {
    const list = new LinkedList<number>();
    list.append(1);
    expect(list.length).toBe(1);
  });

  test("getAt", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.length).toBe(3);
    expect(list.get(2)).toBe(3);
  });

  test("insertAt", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAt(0, 0);

    expect(list.length).toBe(4);
    expect(list.get(3)).toBe(3);

    list.insertAt(3, 3);
    list.insertAt(3, 3);

    expect(list.get(4)).toBe(3);
  });

  test("remove", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);

    list.remove(1);
    expect(list.get(0)).toBe(2);

    list.append(3);
    list.remove(3);

    expect(list.get(0)).toBe(2);
  });

  test("list test", () => {
    const list = new LinkedList<number>();
    test_list(list);
  });
});
