interface Node<T> {
  val: T;
  next?: Node<T>;
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item: T): void {
    const node: Node<T> = { val: item };
    node.next = this.head;
    this.head = node;
    this.length += 1;
  }

  pop(): T | undefined {
    if (!this.head) {
      return;
    }
    const node = this.head;
    this.head = node.next;
    node.next = undefined;
    this.length -= 1;
    return node.val;
  }

  peek(): T | undefined {
    if (!this.head) {
      return;
    }
    return this.head.val;
  }
}
