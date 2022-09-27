function search(
  node: BinaryNode<number> | null | undefined,
  needle: number,
): boolean {
  if (!node) {
    return false;
  }

  if (node.value === needle) {
    return true;
  } else if (needle > node.value) {
    return search(node.right, needle);
  } else {
    return search(node.left, needle);
  }
}

function insert(node: BinaryNode<number>, value: number) {
  if (value > node.value) {
    if (!node.right) {
      node.right = {
        value,
        left: null,
        right: null,
      };
      return;
    }
    insert(node.right, value);
  } else {
    if (!node.left) {
      node.left = {
        value,
        left: null,
        right: null,
      };
      return;
    }
    insert(node.left, value);
  }
}

function lift(node: BinaryNode<number>, nodeToDelete: BinaryNode<number>) {
  if (node.left) {
    node.left = lift(node.left, nodeToDelete);
    return node;
  } else {
    nodeToDelete.value = node.value;
    return node.right;
  }
}

function deleteValue(
  node: BinaryNode<number> | null,
  value: number,
): BinaryNode<number> | null {
  if (!node) {
    return null;
  }

  if (value > node.value) {
    node.right = deleteValue(node.right, value);
    return node;
  } else if (value < node.value) {
    node.left = deleteValue(node.left, value);
    return node;
  } else if (value === node.value) {
    if (!node.left && !node.right) {
      return null;
    }
    if (!node.left || !node.right) {
      return node.left || node.right;
    }
    if (node.left && node.right) {
      node.right = lift(node.right, node);
      return node;
    }
  }

  return node;
}

export class BinarySearchTree {
  head?: BinaryNode<number>;
  constructor(head?: BinaryNode<number>) {
    this.head = head;
  }

  search(value: number) {
    return search(this.head, value);
  }

  insert(value: number) {
    if (!this.head) {
      this.head = {
        value,
        left: null,
        right: null,
      };
      return;
    }
    insert(this.head, value);
  }

  remove(value: number) {
    if (!this.head) {
      return;
    }
    deleteValue(this.head, value);
  }
}
