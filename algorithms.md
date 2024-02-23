# DP

## Backtracking: look 2 steps behind you.

```
for (let i = 2; i < nums.length + 2; i++) {
    loot[i] = Math.max(loot[i-1], loot[i-2] + nums[i-2])
}
```
