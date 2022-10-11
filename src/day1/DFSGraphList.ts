function walk(
  graph: WeightedAdjacencyList,
  curr: number,
  needle: number,
  seen: boolean[],
  path: number[],
): boolean {
  if (seen[curr]) {
    return false;
  }
  seen[curr] = true;

  path.push(curr);

  if (curr === needle) {
    return true;
  }

  const vertex = graph[curr];
  for (let i = 0; i < vertex.length; i += 1) {
    const edge = vertex[i];
    const found = walk(graph, edge.to, needle, seen, path);
    if (found) {
      return true;
    }
  }

  path.pop();

  return false;
}

export default function dfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number,
): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const path: number[] = [];

  if (walk(graph, source, needle, seen, path)) {
    return path;
  }

  return null;
}
