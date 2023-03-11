// Question 1
// Differences between mutating array methods and non-mutation array methods in JavaScript

//MUTATING ARRAY METHODS
// Modify the original array
// Return the modified array
// Changes made to the array using these methods cannot be undone

//EXAMPLES OF MUTATING ARRAY METHODS
// array.push()
// array.pop()
// array.splice()
// array.shift()
// array.unshift()

//NON-MUTATING ARRAY METHODS
// Do not modify the original array
// Return a new array with the modified elements
// The original array remains unchanged

//EXAMPLES OF NON-MUTATING ARRAY METHODS
// concat()
// slice()
// filter()
// map()
// reduce()

// Question 2
// array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]

//Add ‘Kotlin’ to the end of the array
let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languages.push("Kotlin");
console.log(languages);

//Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, "Java");
console.log(languages);

//Remove the first item in the array
languages.splice(0, 1);
console.log(languages);

//Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.splice(0, 0, "Scala", "Swift");
console.log(languages);

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, "Go", "Rust");
console.log(languages);

// Question 3
// The value of the fruit variable will be ['apple', 'mango', 'orange'] because the function modifies the value of the element at index 2 of the fruit array, which changes it from "banana" to "orange"

// Question 4
function max(arr) {
  return Math.max(...arr);
}
const array = [12, 36, -5, -99];
const maximum = max(array);
console.log(maximum);
// Output is 36

// Question 5
function valTimesIndex(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * i);
  }
  return result;
}
console.log(valTimesIndex([2, 4, 6, 8]));
// Output: [0, 4, 12, 24]
