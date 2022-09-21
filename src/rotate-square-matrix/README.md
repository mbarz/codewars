# Rotate a square matrix like a vortex

Your task is to rotate a square matrix of numbers like a vortex.

> In most vortices, the fluid flow velocity is greatest next to its axis and decreases in inverse proportion to the distance from the axis.

So the rotation speed increases with every ring nearer to the middle.

For this kata this means, that the outer "ring" of the matrix rotates one step. The next ring rotates two steps. The next ring rotates three steps. And so on...

The rotation is always "to the left", so against clockwise!

An example:

```
The given matrix:
5 3 6 1
5 8 7 4
1 2 4 3
3 1 2 2

First step:
The outer ring is rotated once to the left.
5 3 6 1 -> 1 4 3 2
5 8 7 4 -> 6 8 7 2
1 2 4 3 -> 3 2 4 1
3 1 2 2 -> 5 5 1 3

Second step:
The second ring is rotated twice to the left.
8 7 -> 7 4 -> 4 2
2 4 -> 8 2 -> 7 8

In the whole square the second step looks like this:
1 4 3 2 -> 1 4 3 2
6 8 7 2 -> 6 4 2 2
3 2 4 1 -> 3 7 8 1
5 5 1 3 -> 5 5 1 3

No more rings. So the result is clear.
```

# Task

Create the method for rotating like a vortex. The method has one input parameter:

The square matrix as an array of arrays

Your method have to return the rotated matrix. You must not change the input array! Create a new array for the output.

The square matrix will always be at least 1x1 and at most 20x20 and of course the array will never be null.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
