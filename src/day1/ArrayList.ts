const copyArray = <T>(from: Array<T>, into: Array<T>): void => {
  for (let i = 0; i < from.length; i += 1) {
    into[i] = from[i];
  }
};

export default class ArrayList<T> {
  public length: number;
  private array: Array<T | undefined>;

  constructor(size: number) {
    this.length = 0;
    this.array = new Array<T>(size);
  }

  prepend(item: T): void {
    if (this.length === this.array.length) {
      const newArray = new Array(this.array.length * 2);
      copyArray(this.array, newArray);
      this.array = newArray;
    }

    this.length += 1;

    for (let i = this.length - 1; i >= 0; i -= 1) {
      this.array[i + 1] = this.array[i];
    }

    this.array[0] = item;
  }

  insertAt(item: T, idx: number): void {
    if (this.length === this.array.length) {
      const newArray = new Array(this.array.length * 2);
      copyArray(this.array, newArray);
      this.array = newArray;
    }
    // move all items after the index to the right
    for (let i = this.length; i >= idx; i -= 1) {
      this.array[i + 1] = this.array[i];
    }

    this.array[idx] = item;
    this.length += 1;
  }

  append(item: T): void {
    if (this.length === this.array.length) {
      const newArray = new Array(this.array.length * 2);
      copyArray(this.array, newArray);
      this.array = newArray;
    }
    this.array[this.length] = item;
    this.length += 1;
  }

  remove(item: T): T | undefined {
    for (let i = 0; i <= this.array.length; i += 1) {
      if (this.array[i] === item) {
        this.removeAt(i);
        return item;
      }
    }
    return;
  }

  get(idx: number): T | undefined {
    if (idx <= this.length && idx <= this.array.length) {
      return this.array[idx];
    }
    return;
  }

  removeAt(idx: number): T | undefined {
    this.length -= 1;
    const val = this.get(idx);
    for (let j = idx; j < this.array.length - 1; j += 1) {
      this.array[j] = this.array[j + 1];
    }
    return val;
  }
}
