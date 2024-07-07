const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function connectedIsland(graph) {
  const visited = new Set();
  let max = 0;
  let prev = 0;

  function dfs(node) {
    if (visited.has(node)) return 0;
    visited.add(node);
    let size = 1;
    for (const neighbour of graph[node]) {
      size += dfs(neighbour);
    }
    return size;
  }
  for (const node in graph) {
    if (!visited.has(node)) {
      let componentSize = dfs(node);
      if (componentSize > max) {
        prev = max;
        max = componentSize;
      } else if (componentSize > prev && componentSize < max) {
        prev = componentSize;
      }
    }
  }
  return prev + " " + max;
}

console.log(connectedIsland(graph));
