//-------------------------------------
// Bridging Into NestJS
//-------------------------------------

// Once the phases above feel comfortable, you're genuinely ready to start NestJS — you won't be learning
// TypeScript and a framework at the same time. Here's how the concepts map directly onto what you'll see:

// ----------------------------------------------------------------------------------------------------
// TypeScript Concept       |            Where it shows up in NestJS
// -------------------------|---------------------------------------------------------------------------
//                          |
// Classes                  |    Controllers, Providers, Services, Modules
// Decorators               |    @Controller(), @Injectable(), @Get(), @Post(), @Body(), @Param()
// Interfaces / DTOs        |     Request bodies, response shapes, config objects
// Access modifiers         |     constructor(private readonly service: X) in every service
// Generics                 |    Repository<T>, custom response wrappers
// Dependency Injection     |    NestJS's core architecture, powered by decorators + metadata
//                          |
// ----------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------
// First Steps in NestJS (once TypeScript feels solid)
// ----------------------------------------------------------------------------------------------------


// • Install the CLI: npm i -g @nestjs/cli, then nest new project-name.
// • Explore the generated structure: main.ts, app.module.ts, app.controller.ts, app.service.ts.
// • Build one simple CRUD module using nest g resource to see controllers, services, and DTOs work
// together.
// • Learn Modules → Controllers → Providers → Dependency Injection, in that order.
// • Then move on to Pipes, Guards, Interceptors, and Exception Filters.