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
  let max = 0;

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
      return 0;
    }
    visited.add(pos);
    let size = 1;
    size += dfs(graph, r + 1, c);
    size += dfs(graph, r - 1, c);
    size += dfs(graph, r, c + 1);
    size += dfs(graph, r, c - 1);

    return size;
  }

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (grid[row][column] === "L" && !visited.has(row + "," + column)) {
        let islandSize = dfs(graph, row, column);
        if (islandSize > max) max = islandSize;
      }
    }
  }
  return max;
}

console.log(countGridIsland(grid));
