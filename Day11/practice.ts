// // 1. Define the Album data structure
// interface Album {
//   userId: number;
//   id: number;
//   title: string;
// }

// // 2. Create the reusable generic fetch function
// async function fetchData<T>(url: string): Promise<T> {
//   const response = await fetch(url);
  
//   // Throw an error if the HTTP status code is not 2xx
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
  
//   // Cast the parsed JSON data to the generic type T
//   return response.json() as Promise<T>;
// }

// // 3. Test the function using a mock API URL
// async function runTest() {
//   const targetUrl = "typicode.com";
  
//   try {
//     // Call the function explicitly specifying the Album type
//     const album = await fetchData<Album>(targetUrl);
    
//     // TypeScript natively understands the properties on the 'album' object
//     console.log("Album Data Retrieved successfully:");
//     console.log(`User ID: ${album.userId}`);
//     console.log(`Album ID: ${album.id}`);
//     console.log(`Title: ${album.title}`);
    
//   } catch (error) {
//     console.error("Failed to fetch album data:", error);
//   }
// }

// // Execute the test function
// runTest();

// 1.The Generic API Wrapper
// Scenario: You need a reusable function to fetch data that automatically types the response.
// Task: Write a generic function fetchData<T>(url: string): Promise<T>. It should use the fetch API, check if the response is okay, and return the JSON parsed as type T. Test it by creating an Album interface and fetching data from a mock URL.

async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error('Network request Failed: ' + response.statusText)
    }
    const data: T = await response.json();
    return data;
}

interface Album {
    userId: number,
    id: number,
    title: string
}

async function demo() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    const album = await fetchData<Album>(url);

    console.log(`Album ID: ${album.id}`)
    console.log(`Album Title: ${album.title}`)
}

demo();


// 2. Record Mapping for Configuration
// Scenario: You are managing feature flags or permissions for specific user roles.
// Task: Define an enum Role { Admin, Editor, Guest }. Use the Record utility type to create a variable PermissionMap where every Role must be mapped to a boolean value. If a role is missing from the object, TypeScript should throw an error.

enum Role{
    Admin = "Admin",
    Editor = "Editor",
    Guest = "Guest"
}

const PermissionMap: Record<Role,boolean> = {
    [Role.Admin]: true,
    [Role.Editor]: false,
    [Role.Guest]: false 
}

console.log(PermissionMap);

// const BrokenMap: Record<Role, boolean> = {
//   [Role.Admin]: true,
//   [Role.Editor]: true, 
// }; // This will cause a TypeScript error because Guest is missing


// 3. Exhaustiveness Checking (The never Type)
// Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
// Task:
// Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
// Write a function handleTask(status: TaskStatus) using a switch statement.
// In the default case, assign the status to a variable of type never.
// The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.

type TaskStatus = 'Open' | 'InProgress' | 'Closed' | 'Archived'; // Adding 'Archived' to the union type

function handleTask(status: TaskStatus){
    switch(status){
        case 'Open':
            console.log("Task is open");
            break;
        case 'InProgress':
            console.log("Task is in progress");
            break;
        case 'Closed':
            console.log("Task is closed");
            break;
        case 'Archived':
            console.log("Task is archived");
            break;
        default:
            const exhaustiveCheck: never = status; // This will cause a compile-time error if a new status is added without handling it
            throw new Error(`Unhandled task status: ${exhaustiveCheck}`);
    }
}

handleTask('Open');
handleTask('Archived'); // This will cause a compile-time error until you add 'Archived' to the switch statement and in type TaskStatus union.


// 4. Recursive Navigation Type
// Scenario: You are building a tree structure for a file system or a sidebar menu.
// Task: Define a type FolderNode that has a name: string. It should also have an optional files: string[] and an optional subFolders property, which is an array of FolderNode objects.

type FolderNode ={
    name : string;
    files?: string[];
    subFolders?: FolderNode[];
}

const myFileSystem: FolderNode = {
    name: "src",
    files: ["index.ts", "app.ts"],
    subFolders: [  
        {
            name: "components",
            files: ["Button.tsx", "header.tsx"],
            //subFolders omitted becuase it's optional (empty folder)
        },
        {
            name: "untils",
            //files omitted because it's optional (folder with only subfolders)
            subFolders: [
                {
                    name: "math",
                    files: ["calculator.ts", "geometry.ts"]
                }
            ]
        }
    ]
};
console.log(myFileSystem);
console.log(myFileSystem.subFolders?.[0]?.files); // Accessing files in the first subfolder


// 5. Template Literal Types for CSS
// Scenario: You are building a UI library and want to strictly enforce unit types for a "spacing" prop.
// Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.

//type MarginValue = `${number}px` | `${number}rem` | `${number}vh`;

// 1. Define the allowed units as a Union Type
type AllowedUnits = 'px' | 'rem' | 'vh';

// 2. Create the Template Literal Type
type MarginValue = `${number}${AllowedUnits}`;

let margin1: MarginValue = "10px";
let margin2: MarginValue = "2.5rem"; // Decimals work!
let margin3: MarginValue = "-5vh";   // Negative numbers work!
let margin4: MarginValue = "0px";
console.log(margin1, margin2, margin3, margin4);

// let bad1: MarginValue = "10em"; // 'em' is not in our AllowedUnits
// let bad2: MarginValue = "tenpx"; // "ten" is not a valid number
// let bad3: MarginValue = "px"; // Missing the number entirely
// let bad4: MarginValue = " 10px"; // Spaces are not allowed!
// let bad5: MarginValue = 10; // Must be a string, not an actual JavaScript number


// 6. Conditional Types & the infer Keyword
// Scenario: You are working with a library that returns data wrapped in a Promise, and you need to extract the underlying type.
// Task: Create a utility type UnwrapPromise<T>. It should check if T is a Promise. If it is, use the infer keyword to return the type the promise resolves to; otherwise, return T itself.

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// 1. Unwrapping a simple Promise
type Case1 = UnwrapPromise<Promise<string>>; 
// Result: string

// 2. Unwrapping a complex object Promise
type Case2 = UnwrapPromise<Promise<{ id: number; name: string }>>; 
// Result: { id: number; name: string }

// 3. Passing a non-Promise type
type Case3 = UnwrapPromise<number>; 
// Result: number (returns the type itself)

// 4. Unwrapping a nested Promise (Single Level)
type Case4 = UnwrapPromise<Promise<Promise<boolean>>>; 
// Result: Promise<boolean>

const result: Case1 = "Hello, World!";
console.log(result);


// 7. The Union Manipulation Puzzle
// Scenario: You have a massive union of possible events but need to categorize them for specific handlers.
// Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'.
// Use Extract to create MouseEvents (only click and dbclick).
// Use Exclude to create NonFormEvents (everything except submit and reset).

type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress';
type MouseEvents = Extract<AllEvents, 'click' | 'dbclick'>;
type NonFormEvents = Exclude<AllEvents, 'submit' | 'reset'>;

const result1: MouseEvents = 'click'; // Valid
const result2: NonFormEvents = 'keypress'; // Valid
//const result3: MouseEvents = 'submit'; // Error: Type '"submit"' is not assignable to type 'MouseEvents'
console.log(result1, result2);

// 8. Async Higher-Order Function (HOF)
// Scenario: You want to wrap any asynchronous function with a standard error logger.
// Task: Write a generic function safeExecute<T> that takes an async function as an argument. It should return a new function that, when called, executes the original function inside a try/catch block and returns null if it fails.

function safeExecute<Args extends any[], T>(asyncFnc: (...args: Args) => Promise<T>) {
    return async (...args: Args): Promise<T | null> => {
        try {
            return await asyncFnc(...args);
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}

const info = async (id: number): Promise<string> => {
    if(id === -1) throw new Error("Invalid ID");
    return `Data for ID: ${id}`
}


async function dryRun() {
    const getData = safeExecute(info);
    const res = await getData(10);
    const res1 = await getData(0);
    const res2 = await getData(-1);
    console.log(res, res1, res2);
}

dryRun();

// 9. Index Signatures for Dynamic Metadata
// Scenario: You are receiving a "Metadata" object from a server where the keys are dynamic strings, but the values must be either a string, number, or boolean.
// Task: Create an interface UserMetadata that has a required createdAt: Date but allows any other dynamic string keys as long as their values match the union type mentioned.

interface UserMetadata{
    createdAt: Date;
    [key: string]: string | number | boolean | Date; // Index signature for dynamic keys
}

const userMeta: UserMetadata = {
    createdAt: new Date(),
    lastLogin: new Date(),
    isActive: true,
    loginCount: 42,
    nickname: "Aaryan"
};

console.log(userMeta);


// 10. Mapped Types with Key Remapping
// Scenario: You have a data model and need to generate a type for an API response that "prefixes" all the keys.
// Task:
// Define an interface Car { make: string; model: string; }.
// Create a mapped type ApiResponse<T> that iterates through keys of T and renames them to be uppercase and prefixed with DATA_ (e.g., make becomes DATA_MAKE).

interface Car {
  make: string;
  model: string;
}

// Mapped type using 'as' for key remapping and Uppercase intrinsic utility
type ApiResponse<T> = {
  [K in keyof T as `DATA_${Uppercase<string & K>}`]: T[K];
};

const carResponse: ApiResponse<Car> = {
    DATA_MAKE: "Toyota",    
    DATA_MODEL: "Corolla"
};

console.log(carResponse);
console.log(Object.keys(carResponse)); // Logs: ['DATA_MAKE', 'DATA_MODEL']