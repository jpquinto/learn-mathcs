---
sidebar_position: 4
---

# 2-DP Example: Coins🪙

You are given coins with values D\_1, D\_2,..., D\_n, as well as a target price, P. Create an algorithm that returns the *smallest number of coins* you can use from the list to make exactly P cents, or return infinity if it is not possible. *You can use each coin at most once.*

For example, if we have the coins `[1, 3, 2, 4]` with a target `6`, our algorithm should return `2`, since it will use the coins with the values `2` and `4`.

1. **Subproblems:** We will let `B[i, j]` be the smallest number of coins you can use from coins `1,...i` to make the value `j`.
    
2. **Base cases:** Our base cases are `B[i, 0] = 0` for all `i`'s, and `B[0, j] = Infinity`, for all `j`'s greater than 0. No coins are needed to make 0 cents, and there's no way to make `j` cents with 0 coins.
    
3. **Case Analysis:** We perform case analysis based on if we want to include the current coin or not.
    
    1. **Case 1: Include the new coin**
        
        * Let `v` be the value of the coin, coin `i`. Note that if `v > j`, then we cannot choose this case.
            
        * This means that `B[i, j]= 1 + B[i - 1,j - v]`
            
        * Note that if `B[i - 1,j - v]` is infinity, then `B[i, j]` will be, too.
            
    2. **Case 2: Don't include the new coin**
        
        * If we choose not to include the new coin, `i`, then `B[i, j]=B[i - 1,j]`
            
    3. Now, do determine whether or not to include/exclude the current coin (which of the two cases), we take the **minimum** of the two cases:
        

$$B[i,j]=min(1+B[i-1,j-v], B[i-1,j])$$

1. **Ordering of Subproblems**: Calculating `B[i, j]` depends on the cells in the table before it, so we solve the subproblems in **increasing** order
    
2. **Final Output:** We will return `B[n, P]`. If it is infinity, then it is impossible.
    
3. **Runtime**: The runtime of this algorithm is O(nP). We loop through the number of coins, `n`, and there is an inner loop iterating through the prices `1,...,P`. All other operations are constant, so our runtime is O(nP).
    

Here is what this algorithm looks like in JavaScript:

```javascript
function minCoins(coins, P) {
    const n = coins.length;
    
    // Create a 2D array
    const B = new Array(n + 1).fill(null).map(() => new Array(P + 1).fill(Infinity));

    // Base cases
    for (let i = 0; i <= n; i++) {
        B[i][0] = 0; // No coins needed to make value 0
    }
    for (let j = 1; j <= P; j++) {
        B[0][j] = Infinity; // Cannot make value j without any coins!
    }

    // Fill the table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= P; j++) {
            const v = coins[i - 1]; // Value of the current coin
            if (v <= j) {
                B[i][j] = Math.min(1 + B[i - 1][j - v], B[i - 1][j]);
            } else {
                B[i][j] = B[i - 1][j];
            }
        }
    }

    return B[n][P];
}
```

Let's run the algorithm with the following setup:

```javascript
const coins = [1, 3, 2, 4];
const target = 6;
console.log(minCoins(coins, target));
```

Running this, as expected, give us the answer `2`. This solution uses the coins with values `2` and `4`. Note that our algorithm is not concerned with *which* coins it is chooses to get this answer, only with how many.

Now, this problem may be a bit harder to trace than the Froggy example. So let's take a look the table of solutions for each subproblem:

| Coins Used | Target = 0 | Target = 1 | Target = 2 | Target = 3 | Target = 4 | Target = 5 | Target = 6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| None | 0 | Infinity | Infinity | Infinity | Infinity | Infinity | Infinity |
| 1 | 0 | 1 | Infinity | Infinity | Infinity | Infinity | Infinity |
| 1 and 3 | 0 | 1 | Infinity | 1 | 2 | Infinity | Infinity |
| 1, 3, and 2 | 0 | 1 | 1 | 1 | 2 | 2 | 3 |
| 1, 3, 2, and 4 | 0 | 1 | 1 | 1 | 1 | 2 | **<mark>2</mark>** |
