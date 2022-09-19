interface Node<T> {
  val: T;
  next?: Node<T>;
  prev?: Node<T>;
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
  }

  prepend(item: T): void {
    const node: Node<T> = { val: item };
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
    this.length += 1;
  }

  insertAt(item: T, idx: number): void {
    if (idx == 0) {
      this.prepend(item);
      return;
    }
    const node: Node<T> = { val: item };
    let i = 0;
    let cur = this.head;
    while (i != idx && cur) {
      i += 1;
      cur = cur.next;
    }
    if (i != idx || !cur) {
      return;
    }
    const prev = cur.prev;
    const next = cur.next;
    if (next) {
      next.prev = node;
      node.next = next;
    }
    node.prev = cur;
    cur.next = node;
    this.length += 1;
  }

  append(item: T): void {
    const node: Node<T> = {
      val: item,
    };
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return;
    }

    if (this.tail) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.length += 1;
    }
  }

  remove(item: T): T | undefined {
    let cur = this.head;
    while (cur) {
      if (cur.val == item) {
        if (cur === this.head) {
          this.head = cur.next;
        }

        const prev = cur.prev;
        const next = cur.next;

        if (prev) {
          prev.next = next;
        }

        if (next) {
          next.prev = prev;
        }

        if (cur == this.tail) {
          this.tail = cur.prev;
        }

        this.length -= 1;

        return cur.val;
      }
      cur = cur.next;
    }

    return;
  }

  get(idx: number): T | undefined {
    if (idx === 0) {
      return this.head?.val;
    }
    let i = 0;
    let cur = this.head;
    while (i != idx && cur) {
      i += 1;
      cur = cur.next;
    }
    if (i != idx || !cur) {
      return;
    }
    return cur.val;
  }

  removeAt(idx: number): T | undefined {
    if (idx === 0 && this.head) {
      const val = this.head.val;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = undefined;
      }
      this.length -= 1;
      return val;
    }

    let i = 0;
    let cur = this.head;
    while (i != idx && cur) {
      cur = cur.next;
      i += 1;
    }
    if (i != idx || !cur) {
      return;
    }

    const prev = cur.prev;
    const next = cur.next;

    if (prev) {
      prev.next = next;
    }

    if (next) {
      next.prev = prev;
    }

    if (cur == this.tail) {
      this.tail = cur.prev;
    }

    this.length -= 1;
    return cur.val;
  }
}
