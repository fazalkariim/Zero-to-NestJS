// -------------Built-in Utility Types --------------------

// TypeScript provides several built-in "helper types" that allow you to derive new types 
// from existing ones without rewriting them. In NestJS, the most common use case is when 
// you have an Entity (database structure) and need related DTOs (Data Transfer Objects), 
// such as CreateDto, UpdateDto, or ResponseDto. Utility types make this process much easier.


// Partial<T>
// Makes all properties optional. It is most commonly used in 
// PATCH/update endpoints because a user may update just one field or multiple fields at a time.

// Pick<T, K>
// Creates a new type by selecting only specific properties from an existing type. It is useful 
// when you don't need the entire entity, only a few fields (for example, a public profile).

// Omit<T, K>
// The opposite of Pick—it removes specific properties while keeping the rest. This is useful 
// when you want to exclude sensitive fields, such as a password.

// Record<K, T>
// Creates an object type where the keys are of type K and the values are of type T. It is 
// useful for dictionary/map-like structures, such as role → permissions or status → color.

// Readonly<T>
// Makes all properties immutable, meaning they cannot be changed after assignment. This is 
// useful for configuration objects and constants.

// Utility Types — Examples (Beginner → Advanced)

// -------------------------------------
// Beginner 1 — Partial<T> basic use
// -------------------------------------

interface Todo {
  title: string;
  completed: boolean;
}
// all are optional now
function updateTodo(todo: Todo, updates: Partial<Todo>): Todo {
  return { ...todo, ...updates };
}
updateTodo({ title: "Learn TS", completed: false }, { completed: true }); 
// sirf 'completed' bhejna allowed hai — yehi Partial ka fayda hai

// -------------------------------------
// Beginner 2 — Pick<T, K> basic use
// -------------------------------------

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
// only id & name needed , not email & password
type PublicUser = Pick<User, 'id' | 'name'>;

const user: PublicUser = { id: 1, name: "Ali" };

// -------------------------------------
// Medium 1 — NestJS-style Update DTO
// -------------------------------------
// create-user.dto.ts

// export class CreateUserDto {
//   name: string;
//   email: string;
//   password: string;
// }

// // update-user.dto.ts
// import { PartialType } from '@nestjs/mapped-types';

// // PATCH /users/:id ke liye — sab fields optional ho jayenge
// export class UpdateUserDto extends PartialType(CreateUserDto) {}

// -------------------------------------
// Medium 2 — Omit<T, K> for safe response
// -------------------------------------
interface UserEntity {
  id: number;
  name: string;
  email: string;
  password: string; // make sure it will not be send with response
}

type SafeUser = Omit<UserEntity, 'password'>;

function toSafeUser(user: UserEntity): SafeUser {
  const { password, ...safeUser } = user;
  return safeUser;
}

// -------------------------------------
// Advanced 1 — Combining Partial + Omit for real PATCH DTO
// -------------------------------------
interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  role: string;
}

// User itself can't update Role and password,
// all other fields are optional
type UpdateUserDto = Partial<Omit<CreateUserDto, 'password' | 'role'>>;

function updateUserService(id: number, dto: UpdateUserDto) {
  // dto mein sirf { name?, email? } aa sakta hai
}


// -------------------------------------
// Advanced 2 — Record + Readonly for a config/permissions map
// -------------------------------------

type Role = 'admin' | 'editor' | 'viewer';
type Permission = 'create' | 'edit' | 'delete' | 'view';

// all roles have fixed permission and cant be changed
const ROLE_PERMISSIONS: Readonly<Record<Role, Permission[]>> = {
  admin: ['create', 'edit', 'delete', 'view'],
  editor: ['create', 'edit', 'view'],
  viewer: ['view'],
};

function hasPermission(role: Role, action: Permission): boolean {
  return ROLE_PERMISSIONS[role].includes(action);
}

// ROLE_PERMISSIONS.admin = [] // ❌ Error — Readonly ki wajah se allowed nahi




//------------------------------------------------------------------------
// ------------------------ Async/Await with Types -------------------------
//------------------------------------------------------------------------


// In NestJS, most controller and service methods are asynchronous because they perform 
// operations such as database queries, external API requests, and file handling. TypeScript 
// provides type safety for these operations when they are properly annotated.

// Promise<T> Return Typing
// When a function is declared as `async`, its return type is automatically wrapped in 
// `Promise<T>`. Explicitly specifying the return type is considered a best practice because 
// it makes the function's contract clear and allows TypeScript to immediately detect incorrect 
// return values.

// try/catch with Typed Errors
// In modern TypeScript, the `error` variable inside a `catch` block has the type `unknown` 
// (previously it was `any`). This means you must first narrow or check its type before accessing 
// its properties. This approach improves safety because any value can be thrown as an error.

// Async Iteration
// When working with data streams—such as paginated results, database cursors, or large file
//  reads—you can use `for await...of` to process data one chunk at a time without loading everything 
// into memory at once.

// -------------------------------------
// Async/Await — Examples (Beginner → Advanced)
// Beginner 1 — Simple typed async function
// -------------------------------------

async function getGreeting(name: string): Promise<string> {
  return `Hello, ${name}`;
}
// Type checker ko pata hai result ek string hai (Promise unwrap ho gaya)
// const message = await getGreeting("Ali");



// -------------------------------------
// Beginner 2 — Basic try/catch
// -------------------------------------

async function fetchData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    console.log(await response.json());
  } catch (error) {
    // error type is 'unknown' — first check
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}


// -------------------------------------
// Medium 1 — NestJS service method with typed return
// -------------------------------------

// interface User {
//   id: number;
//   name: string;
// }

// @Injectable()
// export class UsersService {
//   async findOne(id: number): Promise<User> {
//     const user = await this.userRepository.findOneBy({ id });
//     if (!user) {
//       throw new NotFoundException(`User ${id} not found`);
//     }
//     return user;
//   }
// }



// -------------------------------------
// Medium 2 — try/catch with NestJS exceptions
// -------------------------------------

// async function createUser(dto: CreateUserDto): Promise<User> {
//   try {
//     return await this.userRepository.save(dto);
//   } catch (error) {
//     if (error instanceof QueryFailedError) {
//       throw new ConflictException('Email already exists');
//     }
//     throw new InternalServerErrorException('Something went wrong');
//   }
// }




// -------------------------------------
// Advanced 1 — Async iteration over paginated data
// -------------------------------------

// async function* fetchAllUsers(): AsyncGenerator<User[]> {
//   let page = 1;
//   while (true) {
//     const users = await this.userRepository.find({ skip: (page - 1) * 10, take: 10 });
//     if (users.length === 0) break;
//     yield users;
//     page++;
//   }
// }

// // Usage — har page ko ek-ek karke process karo
// async function processAllUsers() {
//   for await (const userBatch of fetchAllUsers()) {
//     userBatch.forEach(user => console.log(user.name));
//   }
// }



// -------------------------------------
// Advanced 2 — Concurrent typed calls with Promise.all
// -------------------------------------

// interface Order { id: number; total: number; }
// interface Profile { id: number; bio: string; }

// async function getUserDashboard(userId: number): Promise<{
//   user: User;
//   orders: Order[];
//   profile: Profile;
// }> {
//   try {
//     // Teeno calls parallel mein chalti hain — total time kam lagta hai
//     const [user, orders, profile] = await Promise.all([
//       this.usersService.findOne(userId),
//       this.ordersService.findByUser(userId),
//       this.profileService.findOne(userId),
//     ]);

//     return { user, orders, profile };
//   } catch (error) {
//     throw new InternalServerErrorException('Failed to load dashboard');
//   }
// }