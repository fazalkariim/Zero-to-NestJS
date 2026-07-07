// What is TypeScript?
// TypeScript is a syntactic superset of JavaScript which adds static typing.
// This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

// TypeScript Simple Types
// 01 Boolean
let isDone: boolean = false;

// 02 Number
let decimal: number = 6;
let binary: number = 0b1010;
let big: bigint = 100n;
// console.log(`isDone :  ${isDone} , decimal : ${decimal} , binary : ${binary} , big : ${big} `);

let num1: number = 20;
let num2: number = 30;
let sum: number = num1 + num2;
// console.log(`${num1} + ${num2} = ${sum}`);

// 03 String
let fname: string = "fazal karim";
let age: number = 25;
let mstatus: boolean = false;

// console.log(`name : ${fname} , age : ${age} and marriage status : ${mstatus}`);

//-------------------------------------------------------------------------------------

// Type Annotations and Inference
// TypeScript offers two ways to work with types:

// Explicit Typing: You explicitly declare the type of a variable
// Type Inference: TypeScript automatically determines the type based on the assigned value

let a: number = 20; // Explicit
let b = 20; // Inference

function multiplication(num1: number, num2: number): number {  // params explicit, return explicit
  return num1 * num2;
}
console.log(multiplication(5, 8));



interface Emplo{
    name:string;
    age:number;
    address:string;
}
function newEmployee(employee:Emplo){
    return employee;
}

const emplooy = newEmployee({name:"fazal",age:25,address:"Rawalpindi"})
console.log(emplooy)

//---------------------------------------------------------------------

// Array — string[]
 // list containing similer type of data

let cities : string[] = ["Gilgitbaltistan","Rawalpindi","Islamabad"]
cities.push("Lahore")
// cities.push(12) wronge
//  console.log(cities)
//  console.log(cities[0])

let evennumber: number[] =[2,4,6,8,10]
evennumber.push(12)
// evennumber.push("14")  wronge
// console.log(evennumber)


let marks: number[] = [90, 85, 70, 100];
let total = marks.reduce((sum, m) => sum + m, 0);
// console.log(total); 

// Tuple — [string, number]
// combination of both number as well as string

let country:[string,number] = ["pakistan",1]
// console.log(country)

let emp:[number,string,boolean] = [1,"arshad",true]
// console.log(`Employee id : ${emp[0]} , Employee name : ${emp[1]} , Employee present : ${emp[2]}`)

// ----------------------------------------------------------

// Interfaces
// a powerful way to define the shape, contract, or structural blueprint of an object


interface person{
  id:number;
  name:string;
  location:string;
  age:number;
  present:boolean
}
// const Person:person = {id:12,name:"Usama",location:"rawalpindi",age:33,present:false}



interface User {
  name: string;
  age?: number;   // optional — dena zaroori nahi
}
let user1: User = { name: "Ali" };            // correct
let user2: User = { name: "Sara", age: 25 };  // correct B/C age is optional



interface Product {
  readonly id: number;
  title: string;
}
let product1: Product = { id: 1, title: "Phone" };
product1.title = "Laptop"; 



type places = "Gilgit" | "Karachi" | "Islamabad"
type visite = {
  name:string;
  visiting_place:places
}
const Destination : visite = {name:"Abdullah", visiting_place:"Gilgit"}
// const destination : visite = {name:"Shoaib", visiting_place:"Gilgit_Baltistan"} error
console.log(Destination)



interface createproductDTO {
  title:string;
  name:string;
  price?: number;
}
interface updateproductDTO extends createproductDTO{
  readonly id :number
}
function updateproduct(data : updateproductDTO){
  console.log(`product number : ${data.id} , product title : ${data.title} , product name : ${data.name}`)
}
updateproduct({id:22,title:"laptop",name:"lenovo"})