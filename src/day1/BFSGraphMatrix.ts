export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number,
): number[] | null {
  const seen = new Array(graph.length).fill(false);
  seen[source] = true;
  const prev = new Array(graph.length).fill(-1);
  const queue = [source];

  while (queue.length) {
    const current = queue.shift()!;

    if (current === needle) {
      break;
    }

    const edges = graph[current];
    for (let i = 0; i < edges.length; i += 1) {
      const weight = edges[i];
      if (weight === 0) {
        continue;
      }

      if (seen[i]) {
        continue;
      }

      seen[i] = true;
      prev[i] = current;
      queue.push(i);
    }
  }

  if (prev[needle] === -1) {
    return null;
  }

  const path = [];
  let current = needle;
  while (current !== -1) {
    path.push(current);
    current = prev[current];
  }

  path.reverse();
  return path;
}
