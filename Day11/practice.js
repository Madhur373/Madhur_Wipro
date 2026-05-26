"use strict";
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
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network request Failed: ' + response.statusText);
    }
    const data = await response.json();
    return data;
}
async function demo() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    const album = await fetchData(url);
    console.log(`Album ID: ${album.id}`);
    console.log(`Album Title: ${album.title}`);
}
demo();
// 2. Record Mapping for Configuration
// Scenario: You are managing feature flags or permissions for specific user roles.
// Task: Define an enum Role { Admin, Editor, Guest }. Use the Record utility type to create a variable PermissionMap where every Role must be mapped to a boolean value. If a role is missing from the object, TypeScript should throw an error.
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Editor"] = "Editor";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
const PermissionMap = {
    [Role.Admin]: true,
    [Role.Editor]: false,
    [Role.Guest]: false
};
console.log(PermissionMap);
function handleTask(status) {
    switch (status) {
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
            const exhaustiveCheck = status; // This will cause a compile-time error if a new status is added without handling it
            throw new Error(`Unhandled task status: ${exhaustiveCheck}`);
    }
}
handleTask('Open');
handleTask('Archived'); // This will cause a compile-time error until you add 'Archived' to the switch statement and in type TaskStatus union.
const myFileSystem = {
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
let margin1 = "10px";
let margin2 = "2.5rem"; // Decimals work!
let margin3 = "-5vh"; // Negative numbers work!
let margin4 = "0px";
console.log(margin1, margin2, margin3, margin4);
// Result: Promise<boolean>
const result = "Hello, World!";
console.log(result);
const result1 = 'click'; // Valid
const result2 = 'keypress'; // Valid
//const result3: MouseEvents = 'submit'; // Error: Type '"submit"' is not assignable to type 'MouseEvents'
console.log(result1, result2);
// 8. Async Higher-Order Function (HOF)
// Scenario: You want to wrap any asynchronous function with a standard error logger.
// Task: Write a generic function safeExecute<T> that takes an async function as an argument. It should return a new function that, when called, executes the original function inside a try/catch block and returns null if it fails.
function safeExecute(asyncFnc) {
    return async (...args) => {
        try {
            return await asyncFnc(...args);
        }
        catch (err) {
            console.error(err);
            return null;
        }
    };
}
const info = async (id) => {
    if (id === -1)
        throw new Error("Invalid ID");
    return `Data for ID: ${id}`;
};
async function dryRun() {
    const getData = safeExecute(info);
    const res = await getData(10);
    const res1 = await getData(0);
    const res2 = await getData(-1);
    console.log(res, res1, res2);
}
dryRun();
const userMeta = {
    createdAt: new Date(),
    lastLogin: new Date(),
    isActive: true,
    loginCount: 42,
    nickname: "Aaryan"
};
console.log(userMeta);
const carResponse = {
    DATA_MAKE: "Toyota",
    DATA_MODEL: "Corolla"
};
console.log(carResponse);
console.log(Object.keys(carResponse)); // Logs: ['DATA_MAKE', 'DATA_MODEL']
