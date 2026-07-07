// Classes
// Classes in TypeScript serve as strict blueprints for creating objects, extending 
// JavaScript's prototype-based structure with robust static typing and explicit Object-Oriented Programming
//  (OOP) features. They act as the primary mechanism to enforce the four core pillars of OOP: Encapsulation,
//  Inheritance, Polymorphism, and Abstraction.

// class without constructor
class Employee{
     id:number = 22
     name:string = "fazal"
}
const newEmp = new Employee()
// console.log(`Employee Id : ${newEmp.id} & Name is : ${newEmp.name}`)



// constructor
// A constructor is a special method inside a class.
// It is automatically called whenever you create a new object using the new keyword.

// class with constructor
class Emp {
    name:string;
    qualification:string
    empID:number

    constructor(name:string,qualification:string,empID:number){
        this.name = name
        this.qualification = qualification
        this.empID = empID
    }
}
const newEmploy = new Emp("fazal","BSSE",20)
// console.log(newEmploy.name,newEmploy.qualification,newEmploy.empID)

class Employeee {
  constructor(
    public name: string,
    public salary: number = 30000,   // default value
    public department?: string        // optional
  ) {}
}
let emp1 = new Employeee("Sara", 40000, "IT");
let emp2 = new Employeee("Ali");   

// console.log(emp2.salary);  


class BankAccount {
  constructor(
    public accountHolder: string,
    private balance: number   
  ) {}

  showBalance() {
    return `${this.accountHolder}'s balance: ${this.balance}`;
  }
}

let account = new BankAccount("Ali", 5000);
console.log(account.showBalance());   // work perfectly
// console.log(account.balance);   error


class UsersService {
  private users: string[] = [];   // private array, accessible inside the class

  constructor(private readonly databaseName: string) {}

  addUser(name: string): void {
    this.users.push(name);
    console.log(`${name} added to ${this.databaseName}`);
  }

  getAllUsers(): string[] {
    return this.users;
  }
}

let service = new UsersService("MainDB");
service.addUser("Ali");
service.addUser("Sara");
console.log(service.getAllUsers());   // ["Ali", "Sara"]

interface CreateUserDto {
  name: string;
  email: string;
}

class UserEntity {
  public readonly id: number;
  public name: string;
  public email: string;
  public createdAt: Date;

  constructor(id: number, dto: CreateUserDto) {
    this.id = id;
    this.name = dto.name;
    this.email = dto.email;
    this.createdAt = new Date();
  }
}

let newUser = new UserEntity(1, { name: "Ali", email: "ali@test.com" });
console.log(newUser);
// { id: 1, name: "Ali", email: "ali@test.com", createdAt: 2026-... }


