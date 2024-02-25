# DP

## Backtracking: look 2 steps behind you.

```
for (let i = 2; i < nums.length + 2; i++) {
    loot[i] = Math.max(loot[i-1], loot[i-2] + nums[i-2])
}
```

### DFS

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

### BFS

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



