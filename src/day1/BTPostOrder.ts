function walk(node: BinaryNode<number> | null, acc: number[]): void {
  if (!node) {
    return;
  }

  walk(node.left, acc);
  walk(node.right, acc);
  acc.push(node.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  const acc: number[] = [];
  walk(head, acc);
  return acc;
}
