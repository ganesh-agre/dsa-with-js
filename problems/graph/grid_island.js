const grid = [
  ["L", "W", "W", "L", "L"],
  ["L", "W", "W", "L", "L"],
  ["W", "W", "L", "W", "W"],
  ["W", "L", "L", "W", "W"],
  ["L", "W", "W", "L", "W"],
];

function countGridIsland(graph) {
  const visited = new Set();
  const rows = grid.length;
  const columns = grid[0].length;
  let count = 0;

  function dfs(graph, r, c) {
    const pos = r + "," + c;
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= columns ||
      graph[r][c] === "W" ||
      visited.has(pos)
    ) {
      return;
    }
    visited.add(pos);
    dfs(graph, r + 1, c);
    dfs(graph, r - 1, c);
    dfs(graph, r, c + 1);
    dfs(graph, r, c - 1);
  }
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (grid[row][column] === "L" && !visited.has(row + "," + column)) {
        count++;
        dfs(graph, row, column);
      }
    }
  }
  return count;
}

console.log(countGridIsland(grid));
