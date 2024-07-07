const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function depthFSIterative(graph, start) {
  const stack = [start];
  const visited = new Set();
  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
  return visited;
}

function dfsRecursive(graph, start, visited = new Set()) {
  if (visited.has(start)) return undefined;
  visited.add(start);
  for (const neighbour of graph[start]) {
    dfsRecursive(graph, neighbour, visited);
  }

  return visited;
}

console.log(depthFSIterative(graph, "b"));
console.log(dfsRecursive(graph, "b"));
