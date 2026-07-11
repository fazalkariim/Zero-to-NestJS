// Generics
//  Understand the Concept First
// The problem is that you want to create a function that can work with any type, while still maintaining type safety.
// Without Generics — The Problem

// function getFirstItem(arr: any[]) {
//   return arr[0];
// }
// let result = getFirstItem([1, 2, 3]);
// result.toUpperCase(); // Runtime error!



// The problem with using any is that TypeScript loses all type information.
// In the example above, result is actually a number, but TypeScript allows us to call toUpperCase() because the return type is any.
// Generics solve this problem by introducing a placeholder type called <T>. The actual type is determined when the function is called.
// Using Generics

// function getFirstItem<T>(arr: T[]): T {
//   return arr[0];
// }
// let result1 = getFirstItem([1, 2, 3]);      // T = number
// let result2 = getFirstItem(["a", "b"]);     // T = string



// Think of <T> as a variable, but for types.
// Just as function parameters store values, generics store types.

//  Basic Generic Function
// function identity<T>(value: T): T {
//   return value;
// }
// let num = identity<number>(5);
// let str = identity<string>("hello");
// console.log(num);
// console.log(str);

// Output
// 5
// hello
// Explanation

// When we call:
// identity<number>(5);
// TypeScript replaces T with number.
// Internally, it becomes:
// function identity(value: number): number {
//   return value;
// }

// Similarly:
// identity<string>("hello");
// becomes:
// function identity(value: string): string {
//   return value;
// }


// Generic Array Function

// function getLastItem<T>(arr: T[]): T {
//   return arr[arr.length - 1];
// }
// console.log(getLastItem([10, 20, 30]));      // 30
// console.log(getLastItem(["a", "b", "c"]));  // c



// Generics allow us to:

// Reuse code for multiple data types.
// Preserve type safety.
// Avoid using any.
// Write flexible and scalable functions.
// Generic Syntax
// function functionName<T>(parameter: T): T {
//   return parameter;
// }


// Medium Level Example 1 — Generic Class
// typescriptclass Box<T> {
//   constructor(public content: T) {}

//   getContent(): T {
//     return this.content;
//   }
// }
// let numberBox = new Box<number>(100);
// let stringBox = new Box<string>("Hello");

// console.log(numberBox.getContent());   // 100
// console.log(stringBox.getContent());    // "Hello"


// interface HasId {
//   id: number;
// }

// function findById<T extends HasId>(items: T[], id: number): T | undefined {
//   return items.find(item => item.id === id);
// }

// let users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Sara" }
// ];

// let found = findById(users, 1);
// console.log(found);   // { id: 1, name: "Ali" }