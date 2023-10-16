# Binary Search

Write a function called `binarySearch` that takes an array of numbers `nums`, which is sorted in ascending order, and an integer `target` and returns the index of `target` in `nums`, if it exists. If `target` is not found in `nums`, return `-1`.

Your solution must run in `O(log n)` time.

### Type Signature

```ts
binarySearch(nums: number[], target: number): number
```

### Examples

1. `binarySearch([1, 2, 3], 2) -> 1`
1. `binarySearch([1, 2, 3], 3) -> 2`
1. `binarySearch([1, 2, 3, 4], 7) -> -1`

### Topics

- Recursion
- Divide-and-Conquer
- Logarithmic Complexity
- Two-Pointer

### Bonus - Recursive Binary Search

Write a function called `binarySearchRecursive` that performs the same task using recursion instead of iteration.

### Tips (try the problem before reading these!)

<details>
  <summary>Reread the Problem Statement</summary>

> Reread the problem and take note of any important pieces of information.
>
> In this case, we're told that the given array is already in sorted order. How can we take advantage of that fact to speed up our search?

</details>

<details>
  <summary>Reframe the Problem</summary>
  
> If someone asked you to guess a number between 1 and 100 in the fewest number of guesses, what number would you guess first? If that guess was wrong, what number would you guess next? Try to translate this intuitive process into code.

</details>
