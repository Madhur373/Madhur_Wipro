 // ============================================== EXAMPLE 1=============================================================
// class BankAccount {
//     #balance = 0; // private variable | Access modifier
 
//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`Deposited: $${amount}. Current Balance: ₹${this.#balance}`);
//         } else {
//             console.log("Deposit amount must be positive.");
//         }
//     }
 
//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#balance) {
//             this.#balance -= amount;
//             console.log(`Withdrew: $${amount}. Current Balance: ₹${this.#balance}`);
//         } else {
//             console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
//         }
//     }
 
//     getBalance() {
//         return this.#balance;
//     }
// }
 
// // const Account1 = new BankAccount();
// // Account1.deposit(1000);
// // Account1.withdraw(200);
// // //Account1.balance = 10000;
// // console.log(`Final Balance: ₹${Account1.getBalance()}`);
 
// const Account2 = new BankAccount();
// Account2.deposit(500);
// Account2.withdraw(1000);
// console.log(`Final Balance: ₹${Account2.getBalance()}`);



//============================================= EXAMPLE 2=============================================================

class BankCard{
    #pin;

    setPin(pin)
    {
    if (pin.length === 4 && !isNaN(pin)){
        this.#pin=pin;
         console.log("PIN set successfully.");
    }
    else{
        console.log("PIN must be 4 digits.");
    }
    }

    verifyPin(pin)
    {
        if (pin === this.#pin) {
            return "Access Granted";
        } 
        else {
            return "Wrong PIN";
        } 
    }

}
const card = new BankCard();
card.setPin("1234");
console.log(card.verifyPin("1234"));