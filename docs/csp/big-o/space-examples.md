---
sidebar_position: 7
---

# Space Analysis Examples

## Linear Search
- **Algorithm**: The linear search algorithm iterates through the elements of an array to find a target value.
- **Space Complexity**: $O(1)$
- **Explanation**: The algorithm only requires a constant amount of extra space regardless of the size of the input array. It utilizes a fixed number of variables (e.g., loop counters, target value) and does not create any additional data structures or allocate memory dynamically. Therefore, the space complexity of the linear search algorithm is constant ($O(1)$).

## Bubble Sort
- **Algorithm**: The bubble sort algorithm sorts an array of numbers in ascending order by repeatedly comparing and swapping adjacent elements.
- **Space Complexity**: $O(1)$
- **Explanation**: Similar to the linear search algorithm, bubble sort also requires only a constant amount of extra space. It performs all operations in place, meaning that it modifies the input array directly without requiring additional memory allocation. The algorithm only uses a fixed number of variables (e.g., loop counters, temporary variables for swapping) and does not create any auxiliary data structures. Therefore, the space complexity of the bubble sort algorithm is constant ($O(1)$).

Both of these algorithms have a space complexity of $O(1)$. They require only a constant amount of extra space, regardless of the size of the input data. This characteristic makes them efficient in terms of memory usage, particularly when dealing with large datasets where minimizing space overhead is important.

Let's take a look at some other examples, where the space complexity isn't constant.