import { BinarySearchTree } from "@code/BST";

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  const bst = new BinarySearchTree(head);
  return bst.search(needle);
}
