---
sidebar_position: 1
---


# What is Dynamic Programming?

**To see this article on my blog, click [here](https://blog.jeremyquinto.com/the-basics-of-dynamic-programming-algorithms)**!

**Dynamic Programming** is an algorithmic paradigm in which a problem is solved by identifying a collection of *subproblems* and tackling them one by one, using the results from previous problems to help solve the current one, until they are all solved.

If you are familiar with *Divide and Conquer* algorithms, the idea of dividing a problem into subproblems may sound familiar. The key difference is that in *Divide and Conquer*, you can solve each subproblem individually, in a more isolated fashion (hence the "*Divide*" in "*Divide and Conquer*"). In *Dynamic Programming* however, you use the results of the previous subproblems to help you solve the current one.

---

## Example: Fibonacci Numbers

The **Fibonacci Sequence** is a famous series of numbers where each number is the *sum of the two preceding ones*. Mathematically, it is defined as:

$$F(n) = \begin{cases} 0 & \text{if } n = 0 \\ 1 & \text{if } n = 1 \\ F(n-1) + F(n-2) & \text{if } n > 1 \end{cases}$$

The first couple Fibonacci numbers are 0, 1, 1, 2, 3, 5, 8, 13... and so on.

Now let's work together to come up with an algorithm that **prints the *n*th Fibonacci number.**

### Approach 1: Divide and Conquer❌

You'll notice that since we have a recurrence relation defined for Fibonacci numbers, maybe it would be a good idea to write a *Divide and Conquer* algorithm that uses recursion. So let's do that:

```javascript
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
```

Alright, so here we used a recursive function for our divide and conquer algorithm. To calculate the *n*th Fib number, we calculate and add the (n-1)th and (n-2)th Fib numbers.

Now, what's the runtime complexity of this algorithm?

* At each recursive call, the algorithm branches into two recursive calls, each with an input that's one less than the previous one
    
* Each recursive call involves calculating the Fibonacci number of the previous two numbers until reaching the base case
    

This means that our algorithm has a runtime complexity of O(2^n), not very good! 😞

You'll notice a glaring inefficiency in this approach. Let's say we call our function to find the 4th Fib number. Our algorithm will:

* Calculate the 4th Fib number by:
    
    * Calculating the 3rd Fib number by:
        
        * Calculating the 2nd Fib number by:
            
            * Calculating the 1st Fib number (1)
                
            * Calculating the 0th Fib number (0)
                
        * Calculating the 1st Fib number (1)
            
    * Calculating the 2nd Fib number by:
        
        * Calculating the 1st Fib number (1)
            
        * Calculating the 0th Fib number (0)
            

The problem is that we're re-calculating the same Fibonacci numbers over and over again. If we've already calculated, say, the 2nd Fibonacci number, it would be inefficient to calculate it again later on in the runtime.

If only there was a way to fix this problem with an algorithmic paradigm in which we can leverage the results from the previous subproblems while solving the current one...🤔

*DP to the rescue!*

### Approach 2: Dynamic Programming✔️

Now let's revise our algorithm using DP instead.

```javascript
function fibonacci(n) {
    let fib = new Array(n + 1);

    fib[0] = 0;
    fib[1] = 1;

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}
```

Let's compare this to the DC algorithm from earlier. Not only is this code easier to trace (recursive functions can be tough!), you can see that the runtime complexity of this algorithm is O(n), *much* better! (There are still better ways to do this problem to optimize space, but I don't want to get into it now)

As you can see, since our subproblems depended on the results of previous subproblems, the dynamic programming paradigm beats divide and conquer as a solution.

---

## 6 Steps for Implementing Dynamic Programming

When planning out your DP algorithms, these are the main steps you can follow:

1. Defining the **subproblems**, and corresponding array/structure to store the results.
    
2. Define the **base cases**.
    
3. Define the **recursion** for your subproblems (or perform case analysis). How will each subproblem be determined, given the results of the previous subproblems?
    
4. Which way will you **order** the subproblems (increasing/decreasing)?
    
5. What is the **final output** of your algorithm (the last index of the array, maybe)?
    
6. Put it all together to create your algorithm!
    

In our Fibonacci example:

1. The subproblems were each of the Fibonacci numbers from 0,...,n. `fib[]` was our array for storing the results.
    
2. The base cases are `fib[0] = 0` and `fib[1] = 1`, just like the actual base cases of the Fibonacci sequence.
    
3. The recursion was `fib[i] = fib[i - 1] + fib[i - 2]`
    
4. We solved the subproblems in **increasing** order, since each subproblem depended on the subproblems before it.
    
5. The final output is `fib[n]`
    

### Optimizing Space

Looking back at the Fibonacci algorithm, there's a method we can use to optimize it to save some space.

If you think about it, each subproblem only depends on the two before it. Knowing this, it doesn't make sense to have `fib[4]` or `fib[10]` still in memory when we're solving `fib[220]`, for example. Thus, instead of storing *all* of the subproblems in an array, we can just keep track of the results from the two previous subproblems. Here's a look at how this works:

```javascript
function fib2(n) {
    let a = 0 // Prev 2
    let b = 1 // Prev 1
    let c; // Temp variable for swapping
    if (n == 0) return a; // Base case

    for(let i = 2; i <= n; i++) {
        c = a + b; // c is temp variable for swapping
        a = b; 
        b = c; 
    }

    return b;
}
```

Now, we're only storing results for the two previous subproblems at a time. So now we've gone from O(n) space complexity to O(1). Nice!

When implementing a dynamic programming algorithm, it's important to know exactly what each subproblem depends on so you can choose an efficient method to store the results of your subproblems.
