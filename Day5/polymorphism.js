// //============================================= EXAMPLE 1=============================================================
//class Shape {
//     draw() {
//         console.log('Drawing a shape');
//     }
// }
 
// class Circle extends Shape {
//     draw() {
//         console.log('Drawing a circle');
//     }
// }
 
// class Square extends Shape {
//     draw() {
//         console.log('Drawing a square');
//     }
// }
 
// const shapes = [new Circle(), new Square()];
 
// shapes.forEach(shape => shape.draw());



//============================================= EXAMPLE 2=============================================================
class Payment {
    pay() {
        console.log("Processing payment...");
    }
}

class UPI extends Payment {
    pay() {
        console.log("Paid using UPI");
    }
}

class Card extends Payment {
    pay() {
        console.log("Paid using Card");
    }
}

const payments = [new UPI(), new Card()];

payments.forEach(p => p.pay());