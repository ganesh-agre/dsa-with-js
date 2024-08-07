/*
Given two nodes (start and dest) in a directed acyclic graph (DAG), return true if there is a directed path from start to dest, otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.
Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4.
*/
graph = {
  1: [2, 3],
  2: [3, 4],
  3: [4],
  4: [],
  5: [6],
  6: [],
};

function findPathRec(graph, start, dest, visited = new Set()) {
  if (start === dest) return true;
  if (visited.has(start)) return;
  visited.add(start);
  for (const neighbour of graph[start]) {
    if (findPathRec(graph, neighbour, dest, visited)) return true;
  }
  return false;
}

function findPath(graph, start, dest) {
  const stack = [start];
  visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (node === dest) return true;
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
  return false;
}

console.log(findPathRec(graph, 1, 5));
console.log(findPath(graph, 1, 3));
