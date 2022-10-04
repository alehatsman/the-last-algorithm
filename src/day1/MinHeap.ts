export default class MinHeap {
  public length: number;
  private heap: number[];

  constructor() {
    this.length = 0;
    this.heap = [];
  }

  insert(value: number): void {
    this.heap.push(value);
    this.bubbleUp(this.length);
    this.length += 1;
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    if (this.length === 1) {
      const temp = this.heap[0];
      this.heap = [];
      this.length = 0;
      return temp;
    }

    const temp = this.heap[0];
    this.length -= 1;
    this.heap[0] = this.heap[this.length];
    this.bubbleDown(0);
    return temp;
  }

  private bubbleUp(i: number): void {
    if (i === 0) {
      return;
    }

    const pi = this.parent(i);
    const pv = this.heap[pi];
    const iv = this.heap[i];

    if (pv > iv) {
      this.swap(pi, i);
      this.bubbleUp(pi);
    }
  }

  private bubbleDown(i: number): void {
    const li = this.leftChild(i);
    const ri = this.rightChild(i);

    if (i >= this.length || li >= this.length) {
      return;
    }

    const lv = this.heap[li];
    const rv = this.heap[ri];
    const v = this.heap[i];

    if (lv > rv && v > rv) {
      this.swap(i, ri);
      this.bubbleDown(ri);
    } else if (rv > lv && v > lv) {
      this.swap(i, li);
      this.bubbleDown(li);
    }
  }

  private parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private leftChild(i: number): number {
    return 2 * i + 1;
  }

  private rightChild(i: number): number {
    return this.leftChild(i) + 1;
  }

  private swap(index1: number, index2: number) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
}
