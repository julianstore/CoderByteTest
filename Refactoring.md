# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. I used optional chaining (?.) and nullish coalescing (||) operators to simplify the logic for determining the candidate partition key.
2. Remove unnecessary comments that describe what the code is doing, as the code itself should be self-explanatory.
3. Rename data to event as it better reflects the purpose of the variable.
4. Combine the if statements that check if candidate is a string and TRIVIAL_PARTITION_KEY is used into a single else statement.
5. Remove the let declaration for candidate from the top of the function and instead initialize it when it is first assigned.
