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

---

## Fibonacci Numbers

Let's consider an algorithm that creates a new array containing the first $ n $ Fibonacci numbers:

```javascript
function fibonacciArray(n) {
    const fibArray = []; // Initialize an empty array to store Fibonacci numbers
    
    // Base cases
    fibArray[0] = 0;
    fibArray[1] = 1;

    // Calculate Fibonacci numbers and store them in the array
    for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    return fibArray;
}
```

This algorithm generates the first $ n $ Fibonacci numbers and stores them in an array. It starts by initializing an empty array to store the Fibonacci numbers. Then, it iterates from index 2 to index $ n-1 $, calculating each Fibonacci number and storing it in the array.

The space complexity of this algorithm is $ O(n) $ for the following reasons:

- The algorithm creates an array of size $ n $ to store the Fibonacci numbers.
- As $ n $ increases, the size of the array also increases linearly.
- Each element in the array consumes a constant amount of memory.
- Therefore, the total space required by the algorithm is directly proportional to the input size $ n $, resulting in linear space complexity $ O(n) $.

## Square Matrix
Let's consider an algorithm that generates a square matrix of size $ n \times n $ and stores it in a two-dimensional array:

```javascript
function generateSquareMatrix(n) {
    const matrix = []; // Initialize an empty array to store the matrix
    
    // Generate rows
    for (let i = 0; i < n; i++) {
        const row = []; // Initialize an empty array for each row
        
        // Generate columns for each row
        for (let j = 0; j < n; j++) {
            row[j] = i * n + j + 1; // Fill the element with a unique value
        }
        
        matrix[i] = row; // Add the row to the matrix
    }

    return matrix;
}
```

This algorithm generates a square matrix of size $ n \times n $ and stores it in a two-dimensional array. It iterates over each row and column to fill in the elements of the matrix with unique values.

Now, let's analyze the space complexity:

- The space complexity of this algorithm is $ O(n^2) $ because it requires a two-dimensional array to store the $ n \times n $ matrix.
- The size of the matrix grows quadratically with the input size $ n $.
- Each element in the matrix consumes a constant amount of memory.
- Therefore, the total space required by the algorithm is proportional to the square of the input size $ n $, resulting in quadratic space complexity $ O(n^2) $.

In summary, the space complexity of this algorithm is $ O(n^2) $ because it requires a two-dimensional array of size $ n \times n $ to store the generated square matrix, and the space required grows quadratically with the input size $ n $.

:::info
Can you find the runtime complexity of this algorithm?
:::