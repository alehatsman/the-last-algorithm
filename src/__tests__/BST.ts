import { tree } from "./tree";
import { BinarySearchTree } from "@code/BST";

describe("BST", () => {
  test("search", () => {
    const bst = new BinarySearchTree(tree);
    expect(bst.search(7)).toBeTruthy();
  });

  test("insert", () => {
    const bst = new BinarySearchTree({
      value: 10,
      right: {
        value: 15,
        right: null,
        left: null,
      },
      left: {
        value: 5,
        right: {
          value: 7,
          right: null,
          left: null,
        },
        left: null,
      },
    });
    bst.insert(4);
    bst.insert(3);
    expect(bst.head).toEqual({
      value: 10,
      right: {
        value: 15,
        right: null,
        left: null,
      },
      left: {
        value: 5,
        right: {
          value: 7,
          right: null,
          left: null,
        },
        left: {
          value: 4,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
      },
    });
  });

  test("delete#case1", () => {
    const bst = new BinarySearchTree({
      value: 10,
      right: {
        value: 15,
        right: null,
        left: null,
      },
      left: {
        value: 5,
        right: {
          value: 7,
          right: null,
          left: null,
        },
        left: null,
      },
    });
    bst.remove(7);
    expect(bst.head).toEqual({
      value: 10,
      right: {
        value: 15,
        right: null,
        left: null,
      },
      left: {
        value: 5,
        right: null,
        left: null,
      },
    });
  });

  test("delete#case2", () => {
    const bst = new BinarySearchTree({
      value: 10,
      right: {
        value: 15,
        right: null,
        left: null,
      },
      left: {
        value: 5,
        right: {
          value: 7,
          right: null,
          left: null,
        },
        left: null,
      },
    });
    bst.remove(5);
    expect(bst.head).toEqual({
      value: 10,
      right: {
        value: 15,
        right: null,
        left: null,
      },
      left: {
        value: 7,
        right: null,
        left: null,
      },
    });
  });

  test("delete#case3", () => {
    const bst = new BinarySearchTree({
      value: 20,
      right: {
        value: 50,
        right: {
          value: 100,
          right: null,
          left: null,
        },
        left: {
          value: 30,
          right: {
            value: 45,
            right: null,
            left: null,
          },
          left: {
            value: 29,
            right: null,
            left: null,
          },
        },
      },
      left: {
        value: 10,
        right: {
          value: 15,
          right: null,
          left: null,
        },
        left: {
          value: 5,
          right: {
            value: 7,
            right: null,
            left: null,
          },
          left: null,
        },
      },
    });
    bst.remove(20);
    expect(bst.head).toEqual({
      value: 29,
      left: {
        value: 10,
        left: {
          value: 5,
          right: {
            value: 7,
            right: null,
            left: null,
          },
          left: null,
        },
        right: {
          value: 15,
          left: null,
          right: null,
        },
      },
      right: {
        value: 50,
        left: {
          value: 30,
          right: {
            value: 45,
            left: null,
            right: null,
          },
          left: null,
        },
        right: {
          value: 100,
          left: null,
          right: null,
        },
      },
    });
  });
});
