---
sidebar_position: 2
---

# Formal (Mathematical) Definition

Remember that there's quite a bit of math involved in computer science! Computer science is basically a field of mathematics, so you'll probably run into a lot of mathematical theory in coding. Get used to it!

Here we give a formal mathematical definition of Big O notation. 

:::tip
A function $f(n)$ is said to be $O(g(n))$ if there exists positive constants $c$ and $n_0$ such that for all $n \ge n_0$, $|f(n)| \le c \cdot |g(n)|$. 
:::

In simpler terms, it signifies that the growth rate of $f(n)$ is bounded by the growth rate of $g(n)$ for sufficiently large $n$, up to a constant factor. 

## Example (with Proof)

For example, let's say we have an algorithm that makes $3n$ computations. This is an example (in pseudocode):
```
for each element in an array:
- check if it the number is 1. if so, print "1!"
- check if it the number is 2. if so, print "2!"
- check if it the number is 3. if so, print "3!"
```

Here, for each of the $n$ elements in the array, we do 3 comparisons. So we can express the function for which this algorithm's runtime grows as $f(n)=3n$.

To prove that the algorithm is $O(n)$, we need to show that its growth rate is bounded by a linear function for sufficiently large $n$.

Given $f(n) = 3n$, we want to find a function $g(n)$ such that $f(n) \leq c \cdot g(n)$ for some positive constant $c$ and for all $n$ greater than or equal to some $n_0$.

We can choose $g(n) = n$. Then, for all $n \geq 1$, we have:

$$
f(n) = 3n \leq 3n = 3 \cdot n = c \cdot g(n)
$$

where $c = 3$ and $n_0 = 1$.

This shows that $f(n)$ is indeed $O(n)$, as its growth rate is bounded above by a constant multiple of $n$ for sufficiently large $n$.

:::tip
This may seem a little complicated, especially if you aren't a math major. But after some practice, finding the runtimes of your algorithms will become easier, I promise!
:::

## General Rules
You don't need to write a long, mathematical proof every time you find the runtime of an algorithm. Here are some general rules for finding the Big O of your algorithm:

1. **Focus on the dominant term**: When analyzing the time complexity, focus on the term with the largest growth rate as the input size increases. This dominant term determines the overall behavior of the algorithm.

$f(n)=n^2+n$ becomes $f(n)=n^2$.

2. **Ignore constant factors**: Ignore constant factors when expressing the time complexity using Big O notation. Constant factors do not change the overall growth rate of the algorithm.

$f(n)=3n + 34$ becomes $f(n)=n$.



## More Examples

1. $ f(n) = 2n + 5$ is $ O(n)$, because for sufficiently large $ n$, $ f(n)$ grows linearly with $ n$.

2. $ f(n) = n^2 + 3n + 7$ is $ O(n^2)$, because for sufficiently large $ n$, $ f(n)$ grows quadratically with $ n$.

3. $ f(n) = 3^n + 2n^3$ is $ O(3^n)$, because for sufficiently large $ n$, the exponential term dominates the polynomial term.

4. $ f(n) = \log n + n$ is $ O(n)$, because for sufficiently large $ n$, the linear term dominates the logarithmic term.

5. $ f(n) = \sin(n) + \cos(n)$ is $ O(1)$, because the sine and cosine functions are bounded between -1 and 1, regardless of the value of $ n$.


