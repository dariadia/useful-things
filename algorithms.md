# DP

## Backtracking: look 2 steps behind you.

```
for (let i = 2; i < nums.length + 2; i++) {
    loot[i] = Math.max(loot[i-1], loot[i-2] + nums[i-2])
}
```

# Graphs

## DFS

```
function dfs(adj, visited, target) {
	if (visited === target) return true
	if (visited.isVisited) return false
	visited.isVisited = true
	for (let neighbor of adj[visited]) {
		if (!neighbor.isVisited) {
			let reached = dfs(adj, neighbor, t)
			if (reached) return true
		}
	}
	// can't reach target from visited
	return false
}
```

## BFS

```
function bfs(adj, start, target) {
	let queue = []
	queue.push(s)
	start.visited = true
	while(queue.length > 0) {
		let v = queue.shift()
		for(let neighbor of adj[v]) {
			if(!neighbor.visited) {
				queue.push(neighbor)
				neighbor.visited = true
				if (neighbor === target) return true
			}
		} 
	}
	return false
}
```

## Bellman–Ford 
- slower than Dijkstra's
- but more versatile (okay with negative edge weights)
Iterate 1->2->3 and for each calculate the distances from it to the others. If the distance is smaller, update the table. We do several passes, which helps us detect a negavite cycle.

```
function bellmanFord(graph, startVertex) {
  const distances = {}
  const previousVertices = {}

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except start one.
  distances[startVertex.getKey()] = 0
  graph.getAllVertices().forEach((vertex) => {
    previousVertices[vertex.getKey()] = null
    if (vertex.getKey() !== startVertex.getKey()) {
      distances[vertex.getKey()] = Infinity
    }
  });

  // We need (|V| - 1) iterations.
  for (let iteration = 0; iteration < (graph.getAllVertices().length - 1); iteration += 1) {
    // During each iteration go through all vertices.
    Object.keys(distances).forEach((vertexKey) => {
      const vertex = graph.getVertexByKey(vertexKey);

      // Go through all vertex edges.
      graph.getNeighbors(vertex).forEach((neighbor) => {
        const edge = graph.findEdge(vertex, neighbor);
        // Find out if the distance to the neighbor is shorter in this iteration
        // then in previous one.
        const distanceToVertex = distances[vertex.getKey()];
        const distanceToNeighbor = distanceToVertex + edge.weight;
        if (distanceToNeighbor < distances[neighbor.getKey()]) {
          distances[neighbor.getKey()] = distanceToNeighbor;
          previousVertices[neighbor.getKey()] = vertex;
        }
      });
    });
  }

  return {
    distances,
    previousVertices,
  }
}
```

Time: O(nm), where n is the number of vertices in the graph and m is the number of edges.
Space: O(n), as it only requires storing the shortest path estimates for each vertex.


## Dijkstra
- Fails to detect negative cycles.
- Go from start->best neighbour->best neighbour till you reach the target.

```

```
