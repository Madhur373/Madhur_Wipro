//============================================= EXAMPLE 2=============================================================
// // class User {
//     constructor(name) {
//         this.name = name;
//     }
//     logIn() {
//         console.log(`${this.name} has logged in.`);
//     }
// }
 
// class Admin extends User {
//     constructor(name, role) {
//         super(name); // call the parent class constructor
//         this.role = role;
//     }
//     logIn() {
//         super.logIn(); // call the parent class method
//         console.log(`${this.name} has admin privileges as a ${this.role}.`);
//     }
// }
 
// const user1 = new User("Alice");
// const admin1 = new Admin("Bob", "Super Admin");
 
// user1.logIn(); // Alice has logged in.
// admin1.logIn(); // Bob has logged in. Bob has admin privileges as a Super Admin.


//============================================= EXAMPLE 2=============================================================
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);   // call parent constructor
        this.model = model;
    }

    details() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
}


const myCar = new Car("Toyota", "Corolla");
myCar.start();    
myCar.details();  