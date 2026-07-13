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



// 08 · Union, Intersection & Literal Types
// Understand the Concept First
// Union (|) = "Either this or that" — the value can be one of multiple types.
// Intersection (&) = "Both this and that" — the value must include all properties from both types.
// Literal types = Turn specific fixed values into types (for example, only "GET" or "POST" instead of any string).

// let id: string | number;
// id = "abc123";   // corect
// id = 123;          // correct
// id = true;         // Error! boolean not allowed 



// type Name = { name: string };
// type Age = { age: number };
// type Person = Name & Age;   // both are needed
// let p1: Person = { name: "Ali", age: 25 };  



// type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
// function makeRequest(method: HttpMethod, url: string) {
//   console.log(`${method} request to ${url}`);
// }
// makeRequest("GET", "/users");     //  correct
// makeRequest("PATCH", "/users");   //  Error! "PATCH" not allowed




// type SuccessResponse = { status: "success"; data: string };
// type ErrorResponse = { status: "error"; message: string };
// type ApiResult = SuccessResponse | ErrorResponse;
// function handleResponse(res: ApiResult) {
//   if (res.status === "success") {
//     console.log(res.data);      
//   } else {
//     console.log(res.message);  
//   }
// }




// Enum approach
// enum Role {
//   Admin = "ADMIN",
//   User = "USER",
//   Guest = "GUEST"
// }
// function checkAccess(role: Role) {
//   if (role === Role.Admin) {
//     console.log("Full access");
//   }
// }
// checkAccess(Role.Admin);   // Role.Admin use karna padta hai
// // Literal union approach (lightweight alternative)
// type RoleType = "ADMIN" | "USER" | "GUEST";

// function checkAccess2(role: RoleType) {
//   if (role === "ADMIN") {
//     console.log("Full access");
//   }
// }
// checkAccess2("ADMIN");   // you can direct write string




// 09 · Type Narrowing & Guards
// Understand the Concept First
// When you have a union type (such as string | number), TypeScript does not know the exact type at that moment until you check (or narrow) it.
// Narrowing means using conditions (such as if statements) to tell TypeScript that:
// "Inside this specific block of code, this variable is definitely of a particular type."


// function printValue(value: string | number) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());   
//   } else {
//     console.log(value.toFixed(2));
//   }
// }
// printValue("hello");   // HELLO
// printValue(5.6789);     // 5.68



// function greet(name?: string) {
//   if (name) {
//     console.log(`Hello, ${name}`);   
//   } else {
//     console.log("Hello, Guest");
//   }
// }
// greet("Ali");    // Hello, Ali
// greet();          // Hello, Guest



// class Dog {
//   bark() { console.log("Woof!"); }
// }

// class Cat {
//   meow() { console.log("Meow!"); }
// }

// function makeSound(animal: Dog | Cat) {
//   if (animal instanceof Dog) {
//     animal.bark();  
//   } else {
//     animal.meow();  
//   }
// }
// makeSound(new Dog());   // Woof!
// makeSound(new Cat());   // Meow!




// interface SuccessResult {
//   status: "success";
//   data: string;
// }
// interface ErrorResult {
//   status: "error";
//   errorCode: number;
// }
// interface LoadingResult {
//   status: "loading";
// }
// type ApiState = SuccessResult | ErrorResult | LoadingResult;

// function handleState(state: ApiState) {
//   switch (state.status) {
//     case "success":
//       console.log(state.data);        
//       break;
//     case "error":
//       console.log(state.errorCode); 
//       break;
//     case "loading":
//       console.log("Loading...");      // koi extra field nahi
//       break;
//   }
// }





// interface Cat { type: "cat"; meow: () => void; }
// interface Dog { type: "dog"; bark: () => void; }
// type Pet = Cat | Dog;

// function makeSound(pet: Pet) {
  // Discriminated union se 'type' field check karke
  // sahi method call karo
// }