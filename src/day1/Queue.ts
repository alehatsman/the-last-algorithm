interface Node<T> {
  val: T;
  next?: Node<T>;
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
  }

  enqueue(item: T): void {
    const node: Node<T> = { val: item };
    this.length += 1;

    if (!this.tail) {
      this.head = this.tail = node;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) {
      return;
    }
    this.length -= 1;

    const head = this.head;
    this.head = head.next;
    head.next = undefined;

    if (this.length === 0) {
      this.tail = undefined;
    }

    return head.val;
  }

  peek(): T | undefined {
    return this.head?.val;
  }
}
