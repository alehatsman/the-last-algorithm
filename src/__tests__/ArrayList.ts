import ArrayList from "@code/ArrayList";
import { test_list } from "./ListTest";

describe("array-list", () => {
  test("prepend", () => {
    const list = new ArrayList<number>(3);
    list.prepend(420);
    expect(list.get(0)).toEqual(420);
    list.prepend(69);
    expect(list.get(0)).toEqual(69);
    expect(list.get(1)).toEqual(420);
  });

  test("append", () => {
    const list = new ArrayList<number>(1);
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.get(0)).toEqual(1);
    expect(list.get(3)).toEqual(4);
  });

  test("insertAt", () => {
    const list = new ArrayList<number>(5);
    let i = 0;
    while (i < 100) {
      list.append(i);
      i += 1;
    }
    list.insertAt(420, 42);

    expect(list.get(43)).toEqual(42);
    expect(list.get(41)).toEqual(41);
    expect(list.get(42)).toEqual(420);
  });

  test("test_list", function () {
    const list = new ArrayList<number>(3);
    test_list(list);
  });
});
