---
sidebar_position: 4
---

# Big Omega and Big Theta

Alright, we've learned a decent bit about Big O. But have you ever heard someone mention Big $\Theta$ or Big $\Omega$? What are they?

## Big Omega Notation
**Definition**: **Big Omega** ($\Omega$) notation represents the **lower bound** on the growth rate of a function. If a function $ f(n) $ is $ \Omega(g(n)) $, it means there exists a positive constant $ c $ such that $ c \cdot g(n) \leq f(n) $ for all $ n $ greater than or equal to some $ n_0 $. In other words, $ g(n) $ is a lower bound on the growth rate of $ f(n) $.

Big Omega notation provides information about the **best-case scenario** of an algorithm's time complexity. It helps in understanding the minimum rate of growth of the algorithm and provides insights into its lower bounds. This is opposed to Big O notation, which is an **upper bound**, and provides information on the **worst-case scenario**.

## Big Theta Notation
**Definition**: **Big Theta** ($\Theta$) notation represents the **tight bound** on the growth rate of a function. If a function $ f(n) $ is $ \Theta(g(n)) $, it means there exist positive constants $ c_1 $ and $ c_2 $ such that $ c_1 \cdot g(n) \leq f(n) \leq c_2 \cdot g(n) $ for all $ n $ greater than or equal to some $ n_0 $. In other words, $ g(n) $ is both an upper and a lower bound on the growth rate of $ f(n) $.

Big Theta notation provides precise information about the **behavior** of an algorithm, indicating *both* the best and worst-case scenarios. It helps in understanding the exact rate of growth of the algorithm's complexity and provides insights into its efficiency.


## Amortized Runtime Analysis
**Definition**: **Amortized runtime analysis** involves averaging the time taken for a sequence of operations to determine the average time complexity per operation. It is particularly useful for data structures or algorithms where some operations may be expensive occasionally, but cheap on average.

Amortized analysis provides a more accurate estimation of the overall complexity of data structures or algorithms, considering their behavior over a sequence of operations. It helps in understanding the long-term performance characteristics and making informed decisions about their usage.

## Worst Case, Average Case, and Best Case
It's important when analyzing algorithms to consider the runtimes for the best, worst, and average case of running the algorithm.

**Worst Case**: The **worst-case** time complexity represents the upper bound on the time taken by an algorithm for any input of size $ n $. It provides a guarantee that the algorithm will not perform worse than a certain rate for any input.
**Average Case**: The **average-case** time complexity represents the expected time taken by an algorithm averaged over all possible inputs of size $ n $. It provides an estimation of the typical behavior of the algorithm under random or typical input distributions.
**Best Case**: The **best-case** time complexity represents the lower bound on the time taken by an algorithm for any input of size $ n $. It indicates the optimal performance that the algorithm can achieve for certain inputs.

Analyzing the worst, average, and best-case scenarios of an algorithm provides a comprehensive understanding of its behavior across different input conditions. It helps in making informed decisions about algorithm selection, optimization strategies, and performance tuning.

## Finding Big Theta and Big Omega

We will find Big Theta and Big Omega for linear search and binary search (on an array). This process is very similar to finding Big O.

Furthermore, we will find Big Theta and Big Omega for the best, worst, and average case!

### Linear Search
- **Algorithm**: Linear search is a simple search algorithm that sequentially checks each element of the list until it finds the target value or reaches the end of the list.
- **Big Theta ($\Theta$)**:
  - **Best Case**: $ \Theta(1) $ when the target element is found at the beginning of the list.
  - **Worst Case**: $ \Theta(n) $ when the target element is at the end of the list or not present in the list.
  - **Average Case**: $ \Theta(n) $ when the target element is equally likely to be present at any position in the list.
- **Big Omega ($\Omega$)**:
  - **Best Case**: $ \Omega(1) $ (same as Big Theta).
  - **Worst Case**: $ \Omega(n) $ (same as Big Theta).
  - **Average Case**: $ \Omega(n) $ (same as Big Theta).
- **Big O ($O$)**:
  - **Best Case**: $ O(n) $ (same as Worst Case).
  - **Worst Case**: $ O(n) $.
  - **Average Case**: $ O(n) $.

### Binary Search
- **Algorithm**: Binary search is a divide and conquer search algorithm that works on sorted arrays. It repeatedly divides the search interval in half until the target value is found or the interval becomes empty.
- **Big Theta ($\Theta$)**:
  - **Best Case**: $ \Theta(1) $ when the target element is found at the middle of the list.
  - **Worst Case**: $ \Theta(\log n) $ when the target element is not present in the list or is at one of the extreme ends of the list.
  - **Average Case**: $ \Theta(\log n) $ when the target element is equally likely to be present at any position in the list.
- **Big Omega ($\Omega$)**:
  - **Best Case**: $ \Omega(1) $ (same as Big Theta).
  - **Worst Case**: $ \Omega(\log n) $ (same as Big Theta).
  - **Average Case**: $ \Omega(\log n) $ (same as Big Theta).
- **Big O ($O$)**:
  - **Best Case**: $ O(1) $.
  - **Worst Case**: $ O(\log n) $.
  - **Average Case**: $ O(\log n) $.

### Explanation

**Linear Search**:
In linear search, the time taken to find the target element depends on its position in the list. In the best case, the target element is found in the first position, resulting in constant time complexity. In the worst case, the algorithm needs to traverse the entire list, resulting in linear time complexity. The average case also has linear time complexity because each element is equally likely to be searched, and on average, the target element is expected to be found in the middle of the list.

Both Big Theta and Big Omega for linear search reflect these scenarios, as they represent the tight lower and upper bounds on the time complexity of the algorithm. The Big O notation provides additional information about the upper bound on the time complexity for each case.

**Binary Search**:

In binary search on the other hand, the time taken to find the target element depends on the size of the list and the position of the target element relative to the middle of the list. In the best case, the target element is found at the middle of the list, resulting in constant time complexity. In the worst case, the algorithm repeatedly divides the search interval in half until it reaches an empty interval, resulting in logarithmic time complexity. The average case also has logarithmic time complexity, as each division of the search interval reduces the size of the search space by half.

Both Big Theta and Big Omega for binary search reflect these scenarios, as they represent the tight lower and upper bounds on the time complexity of the algorithm. The Big O notation provides additional information about the upper bound on the time complexity for each case.