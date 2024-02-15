---
sidebar_position: 1
---

# Intro to Runtime Complexity

## What is Runtime Complexity?

Have you ever seen somebody say their code runs in $O(n)$ time? Depending on what the algorithm does, that person could be flexing on you, but what does this mean?

**Runtime complexity**, also known as time complexity, is a concept in computer science that describes the amount of time an algorithm takes to execute as a *function of the length of the input*. It provides an estimate of how the execution time of an algorithm grows with the size of the input data.

Runtime complexity is expressed using **Big O** notation, which gives an **upper bound** on the growth rate of an algorithm's runtime as the input size increases. For example, an algorithm with a time complexity of $O(n)$ means that its runtime increases linearly with the size of the input (denoted by '$n$'). Similarly, an algorithm with a time complexity of $O(n^2)$ indicates that its runtime grows quadratically with the input size.

Understanding the runtime complexity of an algorithm is *crucial* for analyzing its efficiency and scalability! Algorithms with lower time complexity are (generally) more efficient, as they can handle larger input sizes within a reasonable amount of time. 

:::warning
It's important to note that runtime complexity doesn't provide an **exact** measure of the actual time an algorithm takes to execute; rather, it offers a *theoretical approximation* of its performance relative to the input size.
:::

## Most Common Runtime Complexities

Common time complexities (*arranged in increasing order*) include:

- $O(1)$ - **Constant** time complexity. The runtime of the algorithm remains constant *regardless* of the input size. This means that the input size does not change the runtime of the algorithm. Yay! An example is an algorithm that takes in an array as input, but just prints `"Hello World"`.
- $O(\log n)$ - **Logarithmic** time complexity. The runtime grows logarithmically with the input size.
- $O(n)$ - **Linear** time complexity. The runtime increases linearly with the input size. An algorithm that sums up the numbers in an array has this runtime complexity.
- $O(n \log n)$ - **Log-linear** time complexity. Common in efficient sorting algorithms like *merge sort* and *quicksort*.
- $O(n^2)$ - **Quadratic** time complexity. The runtime grows quadratically with the input size.
- $O(2^n)$ - **Exponential** time complexity. YIKES!
- $O(n!)$ - Um... not ideal. If you have an algorithm that runs in this time, you're probably doing something wrong.

It's important to note that when having to deal with **millions** or even **billions** of data points, choosing algorithms with a better time complexity can save a **lot** of time!