const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function shortestPath(graph, start, dest) {
  const visited = new Set();
  const queue = [[start, 0]];
  visited.add(start);

  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === dest) return distance;
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }
}

console.log(shortestPath(graph, "a", "d"));
