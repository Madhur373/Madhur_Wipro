// ============================================== EXAMPLE 1=============================================================
// // class CoffeMachine {
//     #waterTemperature = 90;
 
//     #boilWater() {
//         return `Boiling water to ${this.#waterTemperature} degrees.`;
//     }
 
//     #grindBeans() {
//         return "Grinding beans.";
//     }
 
//     brew() {
//         const boilMessage = this.#boilWater();
//         const grindMessage = this.#grindBeans();
//         return `${boilMessage} ${grindMessage} Brewing coffee.`;
//     }
// }
 
// const myCoffeMachine = new CoffeMachine();
// console.log(myCoffeMachine.brew());
// myCoffeMachine.boilWater();


// ============================================== EXAMPLE 2=============================================================
class Printer {
    #checkInk() {
        console.log("Checking ink levels...");
    }

    #loadPaper() {
        console.log("Loading paper...");
    }

    #startPrinting() {
        console.log("Printing document...");
    }

    print() {
        this.#checkInk();
        this.#loadPaper();
        this.#startPrinting();
        console.log("Print completed.");
    }
}

const myPrinter = new Printer();
myPrinter.print();



