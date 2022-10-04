const zero = "a".charCodeAt(0);
const idx = (str: string): number => {
  return str.charCodeAt(0) - zero;
};

class TrieNode {
  value: string;
  children: Array<TrieNode | undefined>;
  isWord: boolean;

  constructor(
    value?: string,
    isWord?: boolean,
    children?: Array<TrieNode | undefined>,
  ) {
    this.value = value ?? "";
    this.children = children ?? new Array(26);
    this.isWord = isWord ?? false;
  }

  hasChildren() {
    for (let node of this.children) {
      if (node) {
        return true;
      }
    }
    return false;
  }
}

function findStartNode(head: TrieNode, path: string[]): TrieNode | undefined {
  let currentNode = head;
  for (let char of path) {
    const i = idx(char);
    const node = currentNode.children[i];
    if (node) {
      currentNode = node;
    } else {
      return;
    }
  }
  return currentNode;
}

function walk(currentNode: TrieNode | undefined, path: string[]): string[] {
  if (!currentNode) {
    return [];
  }

  path.push(currentNode.value);

  let words = [];
  if (currentNode.isWord) {
    words.push(path.join(""));
  }

  for (let node of currentNode.children) {
    words = [...words, ...walk(node, path)];
  }

  return words;
}

function remove(
  currentNode: TrieNode | undefined,
  path: string[],
): TrieNode | undefined {
  if (!currentNode) {
    return;
  }

  if (path.length === 0) {
    if (currentNode.hasChildren()) {
      currentNode.isWord = false;
      return currentNode;
    } else {
      return;
    }
  }

  const segment = path.shift()!;
  currentNode.children[idx(segment)] = remove(
    currentNode.children[idx(segment)],
    path,
  );

  if (!currentNode.hasChildren() && !currentNode.isWord) {
    return;
  } else {
    return currentNode;
  }
}

export default class Trie {
  public head: TrieNode;

  constructor() {
    this.head = new TrieNode();
  }

  insert(item: string): void {
    const path = item.split("");
    let currentNode = this.head;
    for (let segment of path) {
      let index = idx(segment);
      if (!currentNode.children[index]) {
        const newNode = new TrieNode(segment);
        currentNode.children[index] = newNode;
      }
      currentNode = currentNode.children[index]!;
    }
    currentNode.isWord = true;
  }

  delete(item: string): void {
    const path = item.split("");
    remove(this.head, path);
  }

  find(partial: string): string[] {
    const path = partial.split("");
    let words: string[] = [];

    let currentNode = this.head;
    for (let segment of path) {
      const index = idx(segment);
      const node = currentNode.children[index];
      if (!node) {
        return [];
      }
      currentNode = node;
    }

    path.pop();
    return walk(currentNode, path);
  }
}
