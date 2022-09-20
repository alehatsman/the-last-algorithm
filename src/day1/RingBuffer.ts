export default class RingBuffer<T> {
  private capacity: number;
  private buffer: Array<T | undefined>;
  private head: number;
  private tail: number;

  constructor(capacity: number) {
    this.buffer = new Array(capacity);
    this.capacity = capacity;
    this.head = 0;
    this.tail = -1;
  }

  push(item: T) {
    this.buffer[++this.tail % this.capacity] = item;
  }

  pop(): T | undefined {
    const currentIndex = this.head % this.capacity;
    const element = this.buffer[currentIndex];
    if (element) {
      this.buffer[currentIndex] = undefined;
      this.head += 1;
    }
    return element;
  }

  get(idx: number): T | undefined {
    return this.buffer[(this.head + idx) % this.capacity];
  }
}
