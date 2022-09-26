function walk(node: BinaryNode<number> | null, acc: number[]): void {
  if (!node) {
    return;
  }

  walk(node.left, acc);
  acc.push(node.value);
  walk(node.right, acc);
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  const acc: number[] = [];
  walk(head, acc);
  return acc;
}
