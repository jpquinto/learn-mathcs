---
sidebar_position: 5
---

# Comparing Different Algorithms

When choosing data structures for your project, it's important to know the runtimes of the different operations you complete on the data structure. Right now, we'll take a look at and compare the runtimes of Arrays and LinkedLists.

## Arrays

### 1. Accessing an Element by Index
- **Runtime**: $O(1)$
- **Explanation**: Accessing an element by index in an array has constant time complexity because it involves a simple calculation to find the memory address of the desired element based on its index. Regardless of the size of the array, the time taken to access an element remains the same.

### 2. Inserting/Deleting at the End
- **Runtime**: $O(1)$ (Amortized)
- **Explanation**: Inserting or deleting an element at the end of an array has constant time complexity on average. However, occasionally, when the array needs to resize (e.g., when reaching capacity), it may take longer as it involves copying elements to a new larger array. However, this resizing operation occurs infrequently and is amortized over many insertions/deletions, resulting in an average constant time complexity.

### 3. Inserting/Deleting at the Beginning or Middle
- **Runtime**: $O(n)$
- **Explanation**: Inserting or deleting an element at the beginning or middle of an array requires shifting elements to accommodate the change. As a result, the time complexity is linear and depends on the number of elements that need to be shifted, which can be up to the size of the array ($n$).

### 4. Searching (Linear Search)
- **Runtime**: $O(n)$
- **Explanation**: Searching for an element in an unsorted array using linear search involves iterating through each element of the array until the desired element is found (or not found). In the worst case, the algorithm may need to examine all $n$ elements, resulting in linear time complexity.

### 5. Sorting (e.g., Using QuickSort, MergeSort)
- **Runtime**: $O(n \log n)$ to $O(n^2)$
- **Explanation**: The runtime of sorting algorithms varies depending on the algorithm used. Efficient sorting algorithms like QuickSort and MergeSort have an average-case time complexity of $O(n \log n)$, where $n$ is the number of elements in the array. However, less efficient algorithms like Bubble Sort or Insertion Sort may have a time complexity of $O(n^2)$ in the worst case.


Alright, so now you know how long the operations for Arrays take! You probably do these all the time, but it's important to know how long these operations take, so you can design your algorithms better. 

Now let's compare the runtimes of these operations for LinkedLists.

## LinkedLists

### 1. Accessing an Element by Index
- **Runtime**: $O(n)$
- **Explanation**: Accessing an element by index in a linked list requires traversing the list from the head (or tail) until the desired index is reached. Since each traversal step involves moving to the next node, the time complexity is linearly proportional to the index of the element being accessed.

### 2. Inserting/Deleting at the Beginning
- **Runtime**: $O(1)$
- **Explanation**: Inserting or deleting an element at the beginning of a linked list involves updating the pointers of the new node and the head node. Since no traversal of the entire list is required, the time complexity is constant, regardless of the size of the list.

### 3. Inserting/Deleting at the End
- **Runtime**: $O(n)$
- **Explanation**: Inserting or deleting an element at the end of a singly linked list requires traversing the entire list to reach the last node. Therefore, the time complexity is linear and depends on the size of the list.

### 4. Inserting/Deleting in the Middle (with Known Position)
- **Runtime**: $O(1)$ (if position is known)
- **Explanation**: If the position of insertion/deletion in the middle of the linked list is known, the operation can be performed in constant time by updating the pointers of the neighboring nodes. However, determining the position may require traversing the list, resulting in a time complexity of $O(n)$.

### 5. Searching
- **Runtime**: $O(n)$
- **Explanation**: Searching for an element in a linked list requires traversing the entire list until the desired element is found (or not found). Since each traversal step involves moving to the next node, the time complexity is linear and depends on the size of the list.

### 6. Sorting (e.g., Using MergeSort)
- **Runtime**: $O(n \log n)$
- **Explanation**: Sorting a linked list using efficient algorithms like MergeSort has an average-case time complexity of $O(n \log n)$, where $n$ is the number of elements in the list. However, other sorting algorithms may have different time complexities.


## Comparison

| Operation                     | Arrays          | LinkedLists     |
|-------------------------------|-----------------|-----------------|
| Accessing an Element by Index | $O(1)$          | $O(n)$          |
| Inserting/Deleting at the End | $O(1)$ (Amortized) | $O(n)$          |
| Inserting/Deleting at the Beginning or Middle | $O(n)$ | $O(1)$          |
| Searching (Linear Search)     | $O(n)$          | $O(n)$          |
| Sorting                       | $O(n \log n)$ to $O(n^2)$ | $O(n \log n)$   |

## So Which is Better?

We can't really give an exact answer based on what we've just found, as there are other factors to consider when deciding between the two, and it can be very situational. Most people do think Arrays are simply better for storing linear data, though. The discussion between Arrays vs LinkedLists can go deeper into memory allocation and space complexity as well.

But overall, we have found the runtimes for the basic operations of the two data structures.