export default function compare(
  a: BinaryNode<number> | null | undefined,
  b: BinaryNode<number> | null | undefined,
): boolean {
  if (!a && !b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  if (a.value !== b.value) {
    return false;
  }

  return compare(a?.left, b?.left) && compare(a?.right, b?.right);
}
