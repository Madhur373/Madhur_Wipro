//Question 1: The Guest List Formatter

function formatGuests(names) {
    names.shift(); // remove first element

   
    let Guests = names.map(name => "Guest: " + name); // add Guest before each name

    
    return Guests.join("\n");
}


let guests = ["Host", "Khushi", "Shiv", "Soniya"];

console.log(formatGuests(guests));


//Question 2: The Logic Gate (Filter & Math)



const getHighNumbers = (arr) => {
    let threshold = Math.floor(Math.random() * 50) + 1; //random threshold between 1 and 50

    console.log("Threshold:", threshold);

    let numbersOnly = arr.filter(item => typeof item === "number"); //filter only numbers

    
    let result = numbersOnly.filter(num => num > threshold); // filter numbers greater than threshold

    return result;
};
let data = [10, "khushi", 35, 25, "Agrawal", 60, 25, 100];


console.log(getHighNumbers(data));


//Question 3: The Price Calculator

let prices = ["100", "200", "50", "20"];
const calculateTotal = (prices) => {
    prices.pop(); //remove last item (handling fee)

    let numericPrices = prices.map(price => Number(price)); // convert strings to numbers

    
    let total = 0; // calculate sum using forEach

    numericPrices.forEach(num => {
        total += num;
    });

    
    console.log(`Total Price: $${total}`);
};


calculateTotal(prices);