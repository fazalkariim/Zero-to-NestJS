// Classes
// Classes in TypeScript serve as strict blueprints for creating objects, extending 
// JavaScript's prototype-based structure with robust static typing and explicit Object-Oriented Programming
//  (OOP) features. They act as the primary mechanism to enforce the four core pillars of OOP: Encapsulation,
//  Inheritance, Polymorphism, and Abstraction.

// class without constructor

// class Employee{
//      id:number = 22
//      name:string = "fazal"
// }
// const newEmp = new Employee()
// console.log(`Employee Id : ${newEmp.id} & Name is : ${newEmp.name}`)



// constructor
// A constructor is a special method inside a class.
// It is automatically called whenever you create a new object using the new keyword.

// class with constructor

// class Emp {
//     name:string;
//     qualification:string
//     empID:number
//     constructor(name:string,qualification:string,empID:number){
//         this.name = name
//         this.qualification = qualification
//         this.empID = empID
//     }
// }
// const newEmploy = new Emp("fazal","BSSE",20)
// console.log(newEmploy.name,newEmploy.qualification,newEmploy.empID)



// class Employeee {
//   constructor(
//     public name: string,
//     public salary: number = 30000,   // default value
//     public department?: string        // optional
//   ) {}
// }
// let emp1 = new Employeee("Sara", 40000, "IT");
// let emp2 = new Employeee("Ali");   
// console.log(emp2.salary);  


// class BankAccount {
//   constructor(
//     public accountHolder: string,
//     private balance: number   
//   ) {}

//   showBalance() {
//     return `${this.accountHolder}'s balance: ${this.balance}`;
//   }
// }
// let account = new BankAccount("Ali", 5000);
// console.log(account.showBalance());   // work perfectly
// console.log(account.balance);   error




// class UsersService {
//   private users: string[] = [];   // private array, accessible inside the class

//   constructor(private readonly databaseName: string) {}

//   addUser(name: string): void {
//     this.users.push(name);
//     console.log(`${name} added to ${this.databaseName}`);
//   }
//   getAllUsers(): string[] {
//     return this.users;
//   }
// }
// let service = new UsersService("MainDB");
// service.addUser("Ali");
// service.addUser("Sara");
// console.log(service.getAllUsers());   // ["Ali", "Sara"]




// interface CreateUserDto {
//   name: string;
//   email: string;
// }

// class UserEntity {
//   public readonly id: number;
//   public name: string;
//   public email: string;
//   public createdAt: Date;

//   constructor(id: number, dto: CreateUserDto) {
//     this.id = id;
//     this.name = dto.name;
//     this.email = dto.email;
//     this.createdAt = new Date();
//   }
// }

// let newUser = new UserEntity(1, { name: "Ali", email: "ali@test.com" });
// console.log(newUser);
// { id: 1, name: "Ali", email: "ali@test.com", createdAt: 2026-... }





// Getters and Setters
// Getters and setters in TypeScript are special methods inside classes that intercept 
// access to an object's properties. They allow you to retrieve and mutate
//  values in a controlled way, making it easy to run validation logic, calculate 
// values, or trigger side effects whenever a property is accessed or updated.


// class Circle {
//   constructor(public radius: number) {}
//   get area(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }
// let circle1 = new Circle(5);
// console.log(circle1.area);   // Used like property , dont add ()



// class BankAccount {
//   private _balance: number = 0;

//   set balance(amount: number) {
//     if (amount < 0) {
//       console.log("Balance negative nahi ho sakti!");
//       return;
//     }
//     this._balance = amount;
//   }
//   get balance(): number {
//     return this._balance;
//   }
// }
// let acc = new BankAccount();
// acc.balance = 5000;    // ✅ theek
// acc.balance = -100;    // ❌ validation is trigger h
// console.log(acc.balance);   // 5000 (unchanged)




// class Employee {
//   constructor(
//     public firstName: string,
//     public lastName: string
//   ) {}
//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// let emp = new Employee("Ali", "Khan");
// console.log(emp.fullName);   // "Ali Khan" — is calculate direct  




// class Product {
//   private _price: number;

//   constructor(public title: string, initialPrice: number) {
//     this._price = initialPrice;
//   }

//   get price(): number {
//     return this._price;
//   }

//   set price(newPrice: number) {
//     if (newPrice < 0) {
//       throw new Error("Price cannot be negative");
//     }
//     this._price = newPrice;
//   }

//   get discountedPrice(): number {
//     return this._price * 0.9;   // 10% discount computed
//   }
// }

// let product = new Product("Phone", 20000);
// console.log(product.discountedPrice);   // 18000
// product.price = 25000;
// console.log(product.discountedPrice);   // 22500




// class OrderEntity {
//   private items: { name: string; price: number; qty: number }[] = [];

//   addItem(name: string, price: number, qty: number) {
//     this.items.push({ name, price, qty });
//   }

//   get totalAmount(): number {
//     return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
//   }

//   get itemCount(): number {
//     return this.items.length;
//   }
// }

// let order = new OrderEntity();
// order.addItem("Laptop", 50000, 1);
// order.addItem("Mouse", 1000, 2);

// console.log(order.totalAmount);   // 52000
// console.log(order.itemCount);      // 2