---
sidebar_position: 3
---

# Runtime Analysis Examples


## Linear Search

Alright, this may not make too much sense yet, so let's start using examples. 

Take a look at this algorithm in JavaScript:
```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if target found
        }
    }
    return -1; // Return -1 if target not found
}
```

This algorithm performs a **linear search** through the elements of an array to find a target value. It iterates through each element of the array exactly once, checking if the current element matches the target.

The time complexity of this algorithm can be expressed as $O(n)$, where $n$ is the number of elements in the array. Here's why:

- The algorithm iterates through the array using a single loop that runs from index 0 to index $n-1$ (where $n$ is the length of the array). 
- For each iteration, it performs a constant-time operation (comparing the current element to the target).
- Therefore, the total number of comparisons made by the algorithm is directly proportional to the size of the input array, $n$.
- As the input size grows, the time taken by the algorithm increases linearly with the size of the array.

This linear relationship between the input size and the time taken to execute the algorithm is characteristic of linear time complexity ($O(n)$), hence proving that the algorithm is $O(n)$.

Make sense? Alright, let's continue.

--- 

## Bubble Sort
```javascript
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
```

This algorithm implements the **bubble sort** algorithm to sort an array of numbers in ascending order. Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the entire array is sorted.

The time complexity of the bubble sort algorithm is $O(n^2)$, where $n$ is the number of elements in the array. Here's a proof:

- The algorithm uses nested loops. The outer loop runs $n$ times (where $n$ is the length of the array), and the inner loop also runs $n$ times for each iteration of the outer loop.
- Inside the inner loop, the algorithm performs constant-time operations such as element comparison and swapping.
- Thus, the total number of iterations performed by the algorithm is proportional to $n \times n$, resulting in a quadratic relationship between the input size and the time taken to execute the algorithm.

This quadratic relationship between the input size and the time taken to execute the algorithm is characteristic of quadratic time complexity ($O(n^2)$), hence the algorithm is $O(n^2)$.

## Indexing an Array
```javascript
function constantTimeAlgorithm(arr) {
    return arr[0]; // Returns the first element of the array
}
```

This algorithm simply returns the first element of an array. It doesn't depend on the size of the array or perform any operations that iterate over the array.

The time complexity of this algorithm is $O(1)$, which means it takes constant time to execute *regardless* of the size of the input array. Here's why:

- The algorithm performs a single operation (accessing the first element of the array) regardless of the size of the input array.
- It doesn't involve any loops or operations that scale with the size of the input.
- Therefore, the time taken to execute the algorithm remains constant, regardless of the size of the input array.

This constant relationship between the input size and the time taken to execute the algorithm is characteristic of constant time complexity ($O(1)$), hence proving that the algorithm is $O(1)$.

## Binary Search

```javascript
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid; // Return the index if target found
        } else if (arr[mid] < target) {
            low = mid + 1; // Search the right half
        } else {
            high = mid - 1; // Search the left half
        }
    }
    return -1; // Return -1 if target not found
}
```

This algorithm implements the **binary search** algorithm to find a target value in a sorted array. As opposed to linear search, binary search repeatedly divides the search interval in half until the target value is found or the interval is empty.

The time complexity of the binary search algorithm is $O(\log n)$, where $n$ is the number of elements in the array. Here's why:

- In each iteration of the while loop, the algorithm divides the search interval in half.
- The search interval is effectively halved in each iteration, leading to a *logarithmic* reduction in the size of the interval.
- Therefore, the number of iterations required to find the target value is proportional to the *logarithm* of the size of the input array.
- As the input size grows, the time taken by the algorithm increases logarithmically with the size of the array.

This logarithmic relationship between the input size and the time taken to execute the algorithm is characteristic of logarithmic time complexity ($O(\log n)$), hence proving that the algorithm is $O(\log n)$.

:::tip
Technically, this algorithm was $O(\log_2 n)$, but in the context of Big O notation, the base of the logarithm doesn't affect the overall growth rate, so we can just say it is $O(\log n)$. 
:::

If you've got a keen eye, you'll notice that we've proved that binary search is faster than linear search! Linear search is $O(n)$, and binary search is $O(\log n)$. This means that, especially with large datasets, binary search is considered more efficient.

## Stepping it Up
```javascript
function foo(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if target found
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === (target - 1)) {
            return i; // Return the index if target MINUS ONE is found
        }
    }
    return -1; // Return -1 if target not found
}
```

Here, we are looking for the target element OR the target element minus one. Putting aside the inefficiency of doing two separate for loops for this, what is the runtime of this specific algorithm? 

This algorithm iterates through the array *twice*, once to find the target element and once to find the target element minus one. 

- The first loop iterates through the entire array to find the target element. If the target element is found early in the array, the loop may terminate before iterating through all elements.
- The second loop also iterates through the entire array to find the target element minus one. Similarly, if the target minus one element is found early, the loop may terminate early.
- **However**, in the worst-case scenario, both loops iterate through all elements of the array.
- Therefore, the time complexity of this algorithm is $O(n)$, where $n$ is the number of elements in the array.
- Despite having two separate loops, the time complexity is still linear because both loops depend on the size of the input array in a similar manner.

Think about it like this: our function that represents the growth rate of this algorithm is something like $f(n)=2n$, right?

Well, we know that this is just $O(n)$, since we can remove the constant term.

So our algorithm is $O(n)$, even though it loops through the array twice!

## Dijkstra's Algorithm

Alright, let's step up the difficulty a bit!

**Graphs** are a fundamental data structure used to represent connections or relationships between objects. They are composed of nodes (also known as vertices) and edges that connect these nodes. Graphs are widely used in various fields, including computer science, mathematics, and social sciences, to model relationships between different entities. 

Graphs are incredibly versatile and find applications in various domains, including computer networking, social networks, recommendation systems, route planning, and much more. Understanding graphs and their algorithms is essential for solving many real-world problems efficiently.

:::tip
This is just a brief overview of graphs, but in the Data Structures lessons (which will be added eventually if they haven't already), we will go over them much more in depth.
:::

Here are some key definitions for graphs:

1. **Nodes (Vertices)**: Nodes are the fundamental units of a graph and represent entities or objects. For example, in a social network graph, nodes could represent people, while in a transportation network graph, nodes could represent cities.

2. **Edges**: Edges are the connections between nodes in a graph. They represent relationships or interactions between the entities represented by the nodes. Edges can be directed (pointing from one node to another) or undirected (bidirectional, without a specified direction).

For example, think of everyone on Facebook as a node. Edges can be made between nodes if those two users are friends. 

Sometimes graphs can have **weighted edges**. For example, imagine a bunch of cities as nodes, and the paths connecting them as edges. The edges here can have different values depending on the distance between the cities. It would be crucial for a delivery driver to be able to find the shortest path between the nodes (or cities), so they can efficiently deliver their products. 

Let's take a look at **Dijkstra's Algorithm**, a famous algorithm for finding the shortest path in a graph.

```javascript
// Example of Dijkstra's algorithm for finding the shortest path in a graph
function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = new PriorityQueue();

    // Initialize distances and queue
    for (let vertex in graph) {
        distances[vertex] = Infinity;
        visited[vertex] = false;
    }
    distances[start] = 0;
    queue.enqueue(start, 0);

    while (!queue.isEmpty()) {
        const currentVertex = queue.dequeue().value;
        visited[currentVertex] = true;

        for (let neighbor in graph[currentVertex]) {
            const weight = graph[currentVertex][neighbor];
            const totalDistance = distances[currentVertex] + weight;
            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
                if (!visited[neighbor]) {
                    queue.enqueue(neighbor, totalDistance);
                }
            }
        }
    }

    return distances;
}
```

**Runtime Analysis**:
- The algorithm maintains a priority queue to select the next vertex with the shortest distance. Enqueuing and dequeuing operations in the priority queue take $O(\log n)$ time, where $n$ is the number of vertices in the graph.
- The main loop runs once for each vertex in the graph. In each iteration, it dequeues a vertex and explores its neighbors.
- Exploring neighbors takes constant time for each edge, as the algorithm only needs to update distances and enqueue vertices in the priority queue.
- Therefore, the overall time complexity of Dijkstra's algorithm depends on the implementation of the priority queue. With a binary heap-based priority queue, the time complexity is $O((|V| + |E|) \log |V|)$, where $|V|$ is the number of vertices and $|E|$ is the number of edges in the graph.

This time complexity indicates that Dijkstra's algorithm is efficient for sparse graphs (where $|E|$ is much smaller than $|V|^2$), as the priority queue operations dominate the time complexity. However, for dense graphs, other algorithms such as **Bellman-Ford** may be more suitable, but we'll talk about that later.

## Note

Just because an algorithm is, say, $O(\log n)$, DOES NOT mean it will ALWAYS run faster than an $O(n)$ algorithm. Remember that Big O provides an **upper bound**. 

For example, let's say the $O(n)$ is a linear search on an array. This algorithm could run in 1 operation, if the item it is searching for is the first element in the array. Meawhile, say the $O(\log n)$ algorithm is binary search. This algorithm could takes $\log n$ operations in the worst case. 

With this being said, it is still important to be able to determine the worst case scenarios for any algorithms. And furthermore, the best and average cases. We'll go over that next.