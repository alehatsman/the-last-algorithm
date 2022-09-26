export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const queue = [head];

  while (queue.length > 0) {
    const currentNode = queue.shift()!;

    if (currentNode.value === needle) {
      return true;
    }

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return false;
}
