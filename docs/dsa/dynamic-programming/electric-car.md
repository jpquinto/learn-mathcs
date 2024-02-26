---
sidebar_position: 2
---

# Example: Electric Car⚡

Let's try a bit of a harder question than the Fibonacci example.

Suppose you have an electric car that runs on a battery. A battery with charge *C* can take you *C* miles down the road. There are battery stations at each mile marker down a long straight road where you can swap your battery with the battery they have available. The data is given in the form of a list of battery charges \[C\_0, C\_1,..., C\_n\], where C\_0 is the initial charge of your battery at mile marker 0, and each other C\_i is the charge of the battery at mile marker *i*.

You are also given the *price of each battery*, \[P\_0,..., P\_n\], the price of each battery at each mile marker. (Note that P\_0 is free)

Our goal is to design an algorithm to calculate the *minimum cost* to get to the end.

<div data-node-type="callout">
<div data-node-type="callout-emoji">💡</div>
<div data-node-type="callout-text">Note that our algorithm is not concerned with <em>which</em> batteries we choose to buy, only with the lowest possible cost. Typically, dynamic programming algorithms are good for trying to find the optimal <em>cost</em> of a problem, but it doesn't always tell you exactly what to choose to get that cost.</div>
</div>

Alright, let's design the algorithm using the steps above:

1. **Define the subproblems**: Define `A[k]` to be the minimum cost to get from mile marker `k` to mile marker `n + 1`, *given that you buy a battery at mile marker* `k`.
    
2. **Base Cases**: The base case occurs when `k = n`. In this case, `A[n]` is equal to P\_n
    
3. **Recursion**: The minimum cost at each subproblem, `A[k]` is:
    

$$A[k]=min(P_k+A[i])$$

For all `i` such that

$$k < i \le min(k+C_k, n)$$

Basically, `A[k]`, the solution for the current subproblem, is going to be the *minimum* of the `A[i]`'s, where `i` is greater than `k`, but less than `n` (the last mile marker), or `k + C_k` (the last mile marker we can get to if we buy a battery at marker `k`).

For example, let's say we want to buy a battery at mile marker 7, and it will give us 3 charge. That means that `A[7]` is going to be the minimum between `A[8]`, `A[9]`, and `A[10]` (assuming there are at least 10 markers). Anything higher and we won't be able to get to them!

1. **Ordering of the subproblems**: You'll notice that this time, the current subproblem depends on the ones greater than it, so we are going to order our subproblems in *decreasing* order.
    
2. **Output**: Our final output will be `A[0]`.
    

So that's the basic idea behind the algorithm for this problem. I'm going to leave the actual implementation of this algorithm as an exercise. Additionally, is it possible to optimize space in this algorithm like we did for the Fibonacci example? Why or why not?