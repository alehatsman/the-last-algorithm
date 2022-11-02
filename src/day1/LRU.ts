interface Node<T> {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;
}

const createNode = <T>(value: T): Node<T> => {
  return {
    value,
  };
};

export default class LRU<K, V> {
  private length: number;
  private head?: Node<V>;
  private tail?: Node<V>;

  private lookup: Map<K, Node<V>>;
  private reverseLookup: Map<Node<V>, K>;

  constructor(private capacity: number = 10) {
    this.length = 0;
    this.head = this.tail = undefined;
    this.lookup = new Map();
    this.reverseLookup = new Map();
  }

  update(key: K, value: V): void {
    // does it exists?
    // if it doesn't we need to insert
    // - check capacity and evict if necessary
    // if it does, we need to update to the front of the list and update
    // the value

    let node = this.lookup.get(key);
    if (!node) {
      node = createNode(value);
      this.length += 1;
      this.prepend(node!);
      this.trimCache();

      this.lookup.set(key, node!);
      this.reverseLookup.set(node!, key);
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  get(key: K): V | undefined {
    // check the cache for existence
    const node = this.lookup.get(key);
    if (!node) {
      return undefined;
    }

    // update the value we found and move it to the front
    this.detach(node);
    this.prepend(node);

    // return the value
    return node.value;
  }

  private detach(node: Node<V>) {
    const { prev, next } = node;
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }

    if (this.head === node) {
      this.head = this.head.next;
    }

    if (this.tail === node) {
      this.tail = this.tail.prev;
    }

    node.next = undefined;
    node.prev = undefined;
  }

  private prepend(node: Node<V>) {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  private trimCache() {
    if (this.length <= this.capacity) {
      return;
    }

    const tail = this.tail!;
    this.detach(tail);

    const key = this.reverseLookup.get(tail)!;
    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
  }
}
