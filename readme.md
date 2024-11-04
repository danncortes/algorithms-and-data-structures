# Algorithms and Data Structures

This project contains implementations of various algorithms and data structures in TypeScript. Below is a description of each algorithm and data structure implemented in this project.

## Algorithms

### [Binary Search](src/binary-search.ts)
Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

### [Factorial](src/factorial.ts)
The Factorial algorithm calculates the factorial of a non-negative integer. The factorial of a number `n` is the product of all positive integers less than or equal to `n`.

### [Max Subarray Sum](src/max-subarray-sum.ts)
The Max Subarray Sum algorithm finds the maximum sum of a subarray with the length of `num` from the given array. It uses the sliding window technique to achieve this.

### [Same Frequency](src/same-frequency.ts)
The Same Frequency algorithm checks if two numbers have the same frequency of digits.

### [Same](src/same.ts)
The Same algorithm checks if the elements in one array are the squares of the elements in another array, regardless of the order.

### [Unique Values](src/unique-values.ts)
The Unique Values algorithm counts the number of unique values in a sorted array.

### [Valid Anagram](src/valid-anagram.ts)
The Valid Anagram algorithm checks if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Sorting Algorithms

### [Bubble Sort](src/sorting-algorithms/bubble-sort.ts)
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

### [Selection Sort](src/sorting-algorithms/selection-sort.ts)
Selection Sort is a simple comparison-based sorting algorithm. It works by dividing the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list.

### [Insertion Sort](src/sorting-algorithms/insertion-sort.ts)
Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

### [Merge Sort](src/sorting-algorithms/merge-sort.ts)
Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. Most implementations produce a stable sort, meaning that the order of equal elements is the same in the input and output.

### [Quick Sort](src/sorting-algorithms/quick-sort.ts)
Quick Sort is an efficient, in-place, comparison-based, divide and conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.

### [Radix Sort](src/sorting-algorithms/radix-sort.ts)
Radix Sort is a non-comparative sorting algorithm. It sorts numbers by processing individual digits. It uses counting sort as a subroutine to sort an array of numbers.

## Data Structures

### [Singly Linked List](src/data-structures/singly-linked-list.ts)
A Singly Linked List is a linear data structure in which each element points to the next element in the sequence. It allows for efficient insertion and deletion of elements.

## Getting Started

To run the algorithms, uncomment the corresponding function calls in `index.ts` and execute the file using a TypeScript compiler or a Node.js runtime.

```sh
tsc [index.ts](http://_vscodecontentref_/0)
node index.js