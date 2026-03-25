//  1. push()
// Adds element(s) to the end of an array

const arr = [1, 2];
arr.push(3);

console.log(arr); // [1, 2, 3]



// 2. pop()
// Removes the last element

const arr = [1, 2, 3];
arr.pop();

console.log(arr); // [1, 2]



// 3. shift()
// Removes the first element

const arr = [1, 2, 3];
arr.shift();

console.log(arr); // [2, 3]



// 4. unshift()
// Adds element(s) to the beginning

const arr = [2, 3];
arr.unshift(1);

console.log(arr); // [1, 2, 3]



// 5. map()
// Transforms each element and returns a new array

const arr = [1, 2, 3];
const result = arr.map(x => x * 2);

console.log(result); // [2, 4, 6]



// 6. filter()
// Returns elements that match a condition

const arr = [1, 2, 3, 4];
const result = arr.filter(x => x > 2);

console.log(result); // [3, 4]



// 7. reduce()
// Reduces array to a single value

const arr = [1, 2, 3];
const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 6



// 8. find()
// Returns the first matching element

const arr = [1, 2, 3];
const result = arr.find(x => x > 1);

console.log(result); // 2



// 9. findIndex()
// Returns index of first match

const arr = [1, 2, 3];
const index = arr.findIndex(x => x === 2);

console.log(index); // 1



// 10. includes()
// Checks if a value exists

const arr = [1, 2, 3];

console.log(arr.includes(2)); // true



// 11. indexOf()
// Returns index of a value

const arr = [1, 2, 3];

console.log(arr.indexOf(2)); // 1



// 12. slice()
// Returns a shallow copy of a portion (non-mutating)

const arr = [1, 2, 3, 4];
const result = arr.slice(1, 3);

console.log(result); // [2, 3]



// 13. splice()
// Adds/removes elements (mutates array)

const arr = [1, 2, 3];
arr.splice(1, 1); // remove 1 element at index 1

console.log(arr); // [1, 3]



// 14. concat()
// Merges arrays

const a = [1, 2];
const b = [3, 4];

const result = a.concat(b);
console.log(result); // [1, 2, 3, 4]



// 15. join()
// Converts array to string

const arr = ["a", "b", "c"];

console.log(arr.join("-")); // "a-b-c"



// 16. forEach()
// Loops through array (no return value)

const arr = [1, 2, 3];

arr.forEach(x => console.log(x));
// 1 2 3
