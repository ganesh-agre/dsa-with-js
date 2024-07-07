const graph = {
  a: ["b"],
  b: ["a", "c"],
  c: ["b"],
  d: ["e"],
  e: ["d"],
  f: [],
};

function connectedIsland(graph) {
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    for (const neighbour of graph[node]) {
      dfs(neighbour);
    }
  }
  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }
  return count;
}

console.log(connectedIsland(graph));
