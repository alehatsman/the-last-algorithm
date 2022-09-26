function bfs_with_loop(head: BinaryNode<number>, needle: number): boolean {
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

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  return walk([head], needle);
}

function walk(queue: BinaryNode<number>[], needle: number): boolean {
  const node = queue.shift();
  if (!node) {
    return false;
  }

  if (node.value === needle) {
    return true;
  }

  if (node.left) {
    queue.push(node.left);
  }

  if (node.right) {
    queue.push(node.right);
  }

  return walk(queue, needle);
}
