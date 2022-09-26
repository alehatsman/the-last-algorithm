function walk(head: BinaryNode<number> | null, acc: number[]): void {
  if (!head) {
    return;
  }
  acc.push(head.value);
  walk(head.left, acc);
  walk(head.right, acc);
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  const acc: number[] = [];
  walk(head, acc);
  return acc;
}
