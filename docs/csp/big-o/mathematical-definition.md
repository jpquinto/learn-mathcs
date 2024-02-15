---
sidebar_position: 2
---

# Mathematical Definition of Big O Notation

Remember that there's quite a bit of math involved in computer science! Computer science is basically a field of mathematics, so you'll probably run into a lot of mathematical theory in coding. Get used to it!

Here we give a formal mathematical definition of Big O notation. 

:::tip
A function $f(n)$ is said to be $O(g(n))$ if there exists positive constants $c$ and $n_0$ such that for all $n \ge n_0$, $|f(n)| \le c \cdot |g(n)|$. 
:::

In simpler terms, it signifies that the growth rate of $f(n)$ is bounded by the growth rate of $g(n)$ for sufficiently large $n$, up to a constant factor. 

## Examples

1. $ f(n) = 2n + 5$ is $ O(n)$, because for sufficiently large $ n$, $ f(n)$ grows linearly with $ n$.

2. $ f(n) = n^2 + 3n + 7$ is $ O(n^2)$, because for sufficiently large $ n$, $ f(n)$ grows quadratically with $ n$.

3. $ f(n) = 3^n + 2n^3$ is $ O(3^n)$, because for sufficiently large $ n$, the exponential term dominates the polynomial term.

4. $ f(n) = \log n + n$ is $ O(n)$, because for sufficiently large $ n$, the linear term dominates the logarithmic term.

5. $ f(n) = \sin(n) + \cos(n)$ is $ O(1)$, because the sine and cosine functions are bounded between -1 and 1, regardless of the value of $ n$.


