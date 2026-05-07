// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// }
 
// getData().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.error("Error:", error);
// });
// setTimeout(() => {
//     console.log("Data received");
// }, 5000);
 
// setInterval(() => {
//     console.log("Checking for new data...");
// }, 3000);



//reject

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Failed to get data ");
//         }, 2000);
//     });
// }
 
// getData()
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.error("Error:", error);
// });





//  function getData() {
//     return new Promise((resolve, reject) => {
//         if(2 > 3) {
 
//             setTimeout(() => {
//                 resolve("Data received");
//             }, 2000);
//         } else {
//             reject('not working')
//         }
//     });
// }
 
 // fetching data from api
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json()) // res -> string -> json)
    .then(data => data.filter(d => d.id % 2 === 0))
    .then(data => data.map(d => (d.title = "Khushi " + d.title)))
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));
 