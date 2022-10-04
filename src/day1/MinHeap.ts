export default class MinHeap {
  public length: number;
  public heap: number[];

  constructor() {
    this.length = 0;
    this.heap = [];
  }

  insert(value: number): void {
    this.heap.push(value);
    this.length += 1;
    this.bubbleUp();
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    const temp = this.heap[0];
    this.length -= 1;
    if (this.length === 0) {
      this.heap = [];
      return temp;
    }

    this.heap[0] = this.heap[this.length];
    this.bubbleDown();
    return temp;
  }

  private bubbleUp(): void {
    let index = this.length - 1;
    while (index !== 0) {
      let parentIndex = this.parent(index);
      if (this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  private bubbleDown(): void {
    let index = 0;
    while (index < this.length - 1) {
      let leftChildIndex = this.leftChild(index);
      let rightChildIndex = this.rightChild(index);

      let minimalChildIndex = leftChildIndex;
      if (this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
        minimalChildIndex = rightChildIndex;
      }

      if (this.heap[index] > this.heap[minimalChildIndex]) {
        this.swap(index, minimalChildIndex);
      } else {
        break;
      }
      index = minimalChildIndex;
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
